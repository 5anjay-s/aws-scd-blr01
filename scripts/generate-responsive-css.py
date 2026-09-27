from pathlib import Path
import re

source=Path('src/styles/design.css').read_text()
rules={name:dict(part.split(':',1) for part in value.split(';') if ':' in part) for name,value in re.findall(r'\.([\w-]+)\{([^}]+)\}',source)}
art=set(); bleed=set(); borders=[]; compositions=set(); image_classes=set()
for component in Path('src/components').rglob('*.tsx'):
    text=component.read_text()
    image_classes.update(re.findall(r'<(?:img|SignalStitch|ScrollSpark)\b[^>]*className="([^"]+)"', text))
    stack=[]
    for m in re.finditer(r'<(/?)([A-Za-z][\w.]*)\b([^<>]*)>',text):
        close,tag,attrs=m.groups()
        if close:
            if not stack:continue
            entry=stack.pop()
            if entry['children'] and all(rules.get(child,{}).get('position')=='absolute' for child in entry['children']):
                compositions.add(entry['class'])
            continue
        cl=re.search(r'className="([^"]+)"',attrs)
        name=cl[1].split()[0] if cl else ''
        if stack:stack[-1]['children'].append(name)
        if not attrs.rstrip().endswith('/'):stack.append({'class':name,'children':[]})
    for match in re.finditer(r'<(?:div|DesignMotion)\b([^<>]+)>\s*<(?:img|SignalStitch|ScrollSpark)\b([^<>]+)>',text):
        attrs,img=match.groups()
        cl=re.search(r'className="([^"]+)"',attrs)
        if cl: art.add(cl[1].split()[0])
        if 'pixel-border' in attrs:
            node=re.search(r'data-node-id="([^"]+)"',attrs)
            var=re.search(r'src=\{([^}]+)\}',img)
            url=re.search(r'const '+re.escape(var[1])+r' = "([^"]+)"',text)
            if node and url:borders.append((node[1],url[1],'Mobile' in component.stem))
    for name,value in rules.items():
        if name in text and 'background-color' in value and value.get('width') in ['1440px','1439px','390px','100%']:
            bleed.add(name)

def length(value,unit='--design-unit'):
    return re.sub(r'(-?\d+(?:\.\d+)?)px',lambda m:f'calc({m[1]} * var({unit}))',value)

out=['/* Responsive overrides for the original Figma styles. Regenerate with scripts/generate-responsive-css.py. */']
for name,props in rules.items():
    p={}
    for key,value in props.items():
        if key in ['width','left','right'] and 'px' in value:p[key]=length(value)
        if key in ['gap','padding','padding-left','padding-right','padding-top','padding-bottom','margin-left','margin-right','margin-top','margin-bottom'] and 'px' in value:p[key]=length(value,'--space-unit')
    if props.get('height')=='100%' and props.get('position')!='absolute' and name not in image_classes:p['height']='auto'
    if props.get('display')=='contents':p.update(display='block',height='auto')
    if props.get('display')=='flex' and re.fullmatch(r'\d+(?:\.\d+)?px',props.get('height','')) and name not in art and name not in compositions:
        p['height']='auto'
        if 'cursor' in props and props.get('height') not in ['80px']:p['min-height']='48px'
    if name in art:
        for key in ['width','height','left','right','top','bottom']:
            if 'px' in props.get(key,''):p[key]=length(props[key])
    font=re.fullmatch(r'([\d.]+)px',props.get('font-size',''))
    if font:
        n=float(font[1]); floor=n if n<12 else max(11,min(n,n*.78)); floor=max(14,floor) if 14<=n<=22 else floor; floor=min(floor,40) if n>=24 else floor
        p['font-size']=f'clamp({floor:g}px, calc({n:g} * var(--design-unit)), {n:g}px)'
        if n and re.fullmatch(r'-?[\d.]+px',props.get('letter-spacing','')):
            p['letter-spacing']=f"{float(props['letter-spacing'][:-2])/n:g}em"
    line=re.fullmatch(r'([\d.]+)px',props.get('line-height',''))
    if line and float(line[1]):
        p['line-height']=f'{float(line[1])/float(font[1]):g}' if font else f'max(1.05em, calc({line[1]} * var(--space-unit)))'
    if p:out.append('.design-content .'+name+'{'+ ';'.join(k+':'+v for k,v in p.items())+'}')
    if name in bleed:
        out.append('.design-content .'+name+'{isolation:isolate}')
        out.append('.design-content .'+name+'::before{content:"";position:absolute;inset:0;left:calc(50% - 50vw);right:calc(50% - 50vw);background:'+props['background-color']+';z-index:-1;pointer-events:none}')
for node,url,is_mobile in borders:
    height=54 if is_mobile else 108
    width=720 if is_mobile else 1440
    out.append(f'.design-content [data-node-id="{node}"]{{width:100vw;height:{height}px;left:calc(50% - 50vw);background-image:url("{url}");background-size:{width}px {height}px;background-repeat:repeat-x}}')
    out.append(f'.design-content [data-node-id="{node}"] > img{{display:none}}')
Path('src/styles/responsive-generated.css').write_text('\n'.join(out)+'\n')
print(f'Generated {len(out)} responsive rules and {len(borders)} border placements.')
