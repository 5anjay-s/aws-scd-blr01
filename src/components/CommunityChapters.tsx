import { useState } from 'react';
import { SpinningSpark } from './SpinningSpark';
import { WovenRibbon } from './WovenRibbon';
import { BuildBrackets } from './BuildBrackets';

// Keep the original exports and frame IDs; align each title, symbol and copy to
// the same grid instead of forcing all three bands into a fixed viewport.
export function CommunityChapters({ mobile = false }: { mobile?: boolean }) {
  const [belongHovered, setBelongHovered] = useState(false);
  const node = (desktop: string, compact: string) => mobile ? compact : desktop;
  const chapters = [
    { title: 'LEARN', color: 'cyan', kind: 'spark', text: 'Follow your curiosity. Explore ideas in cloud, AI, and the tools shaping what is next.', row: node('860:5088', '1169:623'), titleNode: node('860:5089', '1169:625'), group: mobile ? '1169:624' : undefined, copy: node('860:5090', '1169:630'), art: node('860:5091', '1169:626'), edge: node('860:5092', '1169:631'), src: mobile ? '/assets/1168-493-2adcd.svg' : '/assets/860-5073-2287b.svg' },
    { title: 'BUILD', color: 'orange', kind: 'brackets', text: 'Move from what-if to what-next. Experiment, ask better questions, and put your ideas in motion.', row: node('860:5093', '1169:635'), titleNode: node('860:5094', '1169:637'), group: mobile ? '1169:636' : undefined, copy: node('860:5095', '1169:643'), art: node('860:5096', '1169:638'), edge: node('860:5097', '1169:644'), src: mobile ? '/assets/1168-493-fd314.svg' : '/assets/860-5085-96238.svg' },
    { title: 'BELONG', color: 'violet', kind: 'ribbon', text: 'Find the people who get it. Share what you know. Make room for what you will build together.', row: node('860:5098', '1169:648'), titleNode: node('860:5099', '1169:650'), group: mobile ? '1169:649' : undefined, copy: node('860:5100', '1169:656'), art: node('860:5101', '1169:651'), edge: node('860:5102', '1169:657'), src: mobile ? '/assets/1168-493-5454f.svg' : '/assets/1160-5759-305fd.svg' },
  ];
  return <div className="community-chapters" data-node-id={mobile ? '1168:493' : undefined}>
    <div className="chapter-panel" data-node-id={node('860:5085', '1169:621')}>
      <p className="chapter-eyebrow" data-node-id={node('860:5086', '1169:622')}>02 / LEARN. BUILD. BELONG.</p>
      <div className="chapter-list" data-node-id={mobile ? undefined : '860:5087'}>
        {chapters.map(chapter => <div key={chapter.title} className={`chapter-band chapter-band--${chapter.color} ${chapter.title.toLowerCase()}-chapter`} data-node-id={chapter.row} data-name={`${chapter.title} / Chapter`}
          onPointerEnter={e => chapter.kind === 'ribbon' && e.pointerType !== 'touch' && setBelongHovered(true)} onPointerLeave={() => setBelongHovered(false)} onPointerCancel={() => setBelongHovered(false)}>
          <div className="chapter-title-group" data-node-id={chapter.group}>
            <h3 className="chapter-title" data-node-id={chapter.titleNode}>{chapter.title}</h3>
            <div className={`chapter-symbol chapter-symbol--${chapter.kind}`} data-node-id={chapter.art}>
              {chapter.kind === 'spark' ? <SpinningSpark src={chapter.src} alt="" className="chapter-symbol-art curiosity-spark-spin" /> : chapter.kind === 'brackets' ? <BuildBrackets src={chapter.src} className="chapter-symbol-art" /> : <WovenRibbon src={chapter.src} alt="" className="chapter-symbol-art" active={belongHovered} />}
            </div>
          </div>
          <p className="chapter-copy" data-node-id={chapter.copy}>{chapter.text}</p>
          <img className="chapter-edge" src={mobile ? '/assets/1168-493-b4ed3.svg' : '/assets/860-5085-cefb3.svg'} alt="" data-node-id={chapter.edge} />
        </div>)}
      </div>
      <p className="chapter-eyebrow chapter-note" data-node-id={node('860:5103', '1169:661')}>AWS, AI + MONGODB WORKSHOPS / SESSION DETAILS SOON</p>
    </div>
  </div>;
}
