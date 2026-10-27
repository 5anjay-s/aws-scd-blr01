// Treat text blocks, controls, and assembled artwork as units, rather than
// separating the individual SVG pieces or lines in the imported compositions.
const readingContent = 'p, h1, h2, h3, h4, h5, h6, a, button, [role="heading"], dt, dd, li, label, input';
const motionOwned = [
  '[data-reveal="off"]', '.site-header-shell',
  '.hero-masthead', '[data-hero-sky]', '[data-hero-invitation]',
  '.community-voices', '.programme-step', '.signal-stitch-reveal',
  '.sponsor-light', '[data-spotlight-head]', '[data-spotlight-tripod]',
].join(',');
const excluded = [
  motionOwned, '[hidden]', '[aria-hidden="true"]',
  '.pixel-border', '.dither-divider', '.programme-divider',
  '[data-name*="divider" i]', '[data-name*="dither corner" i]',
  '[data-name^="Clearing /" i]', '[data-name^="Form / carbon backing" i]',
  '[data-name^="Paper / continuous form" i]',
].join(',');
const atomic = [
  'a', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', '[role="heading"]',
  '.faq-accordion', '.faq-status > div', '.scd-speaker',
  '.ticket-artwork', '.ticket-artwork-desktop', '[data-reveal="fade"]', '[data-reveal="rise"]',
].join(',');

export type RevealTarget = {
  element: HTMLElement;
  artwork: boolean;
  fadeOnly: boolean;
  top: number;
  opacity: number;
  translate: string;
};

function ancestorsOfMatches(root: HTMLElement, selector: string) {
  const ancestors = new Set<Element>();
  root.querySelectorAll(selector).forEach(element => {
    let parent = element.parentElement;
    while (parent && parent !== root && !ancestors.has(parent)) {
      ancestors.add(parent);
      parent = parent.parentElement;
    }
  });
  return ancestors;
}

export function collectScrollRevealTargets(root: HTMLElement): RevealTarget[] {
  const targets: RevealTarget[] = [];
  // Classify descendants once instead of repeatedly scanning each subtree.
  const motionParents = ancestorsOfMatches(root, motionOwned);
  const artworkParents = ancestorsOfMatches(root, 'img, svg');
  const readingParents = ancestorsOfMatches(root, readingContent);
  const visit = (element: HTMLElement, compositionRoot = false) => {
    if (element.matches(excluded)) return;
    const style = getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden') return;
    const children = Array.from(element.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
    const positioned = style.position === 'sticky' || style.position === 'fixed';
    const artwork = (artworkParents.has(element) || element.matches('img')) && !readingParents.has(element);
    const textGroup = children.length > 0 && children.every(child => child.matches('p, span, strong, em, br'))
      && style.backgroundColor === 'rgba(0, 0, 0, 0)';
    const card = /(?:\/ Chapter$|^Programme \/ \d{2} )/.test(element.dataset.name ?? '');
    const content = element.matches(atomic) || element.matches('p, dt, dd, li, label') || artwork;
    if (!compositionRoot && !positioned && !motionParents.has(element) && Number(style.opacity) > 0
      && (content || textGroup || card)) {
      const bounds = element.getBoundingClientRect();
      if (bounds.width > 1 && bounds.height > 1
        && (content || textGroup && bounds.height < 400 || card && bounds.height <= Math.min(560, window.innerHeight * 0.75))) {
        targets.push({ element, artwork, fadeOnly: element.dataset.reveal === 'fade' || element.matches('.sponsor-tier'),
          top: bounds.top, opacity: Number(style.opacity), translate: style.translate });
        return;
      }
    }
    children.forEach(child => visit(child));
  };
  root.querySelectorAll<HTMLElement>('.design-section > .design-content > *').forEach(element => visit(element, true));
  return targets;
}
