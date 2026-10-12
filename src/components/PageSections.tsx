import { memo, type ComponentType } from 'react';
import manifest from '../design-manifest.json';
import { groupPageSections, type Section } from '../page-config';

const modules = import.meta.glob<{ default: ComponentType }>('./design/*.tsx', { eager: true });
const components = new Map(manifest.map((entry) => [entry.id,
  modules[`./design/${entry.name}.tsx`].default]));

// Scroll tracking and transition phases update the shell, not the compositions.
export const PageSections = memo(function PageSections({ sections }: { sections: Section[] }) {
  return groupPageSections(sections).map(group => group[0].panel
    ? <div key={group[0].node} className="experience-panel">
      {group.map(item => <DesignSection key={item.node} item={item} />)}
    </div>
    : <DesignSection key={group[0].node} item={group[0]} />);
});

function DesignSection({ item }: { item: Section }) {
  const Component = components.get(item.node)!;

  return <section id={item.anchor} aria-label={item.label} tabIndex={-1}
    data-design-section={item.node} className="design-section">
    <div className="design-content"><Component /></div>
  </section>;
}
