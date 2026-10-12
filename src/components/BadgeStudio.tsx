import { useEffect, useId, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { BADGE_HEIGHT, BADGE_WIDTH, badgeFilename, badgeLooks, drawBadge, loadBadgeArtwork, type BadgeLook } from './badgeArtwork';
import { ArcadeText } from './ArcadeText';
import { badgePhotoError } from './badgePhoto';

type Artwork = Awaited<ReturnType<typeof loadBadgeArtwork>>;
type Portrait = { image: HTMLImageElement; filename: string };
// Keep an unfinished badge when App switches between its responsive compositions.
// Photos stay in memory only, with no upload or persistent browser storage.
let draft: { name: string; look: BadgeLook; portrait: Portrait | null } = { name: '', look: 'meet', portrait: null };

function BadgeCanvas({ art, look, name = '', portrait = null, canvasRef, thumbnail = false }: {
  art: Artwork; look: BadgeLook; name?: string; portrait?: Portrait | null;
  canvasRef?: RefObject<HTMLCanvasElement | null>; thumbnail?: boolean;
}) {
  const ownRef = useRef<HTMLCanvasElement>(null);
  const ref = canvasRef ?? ownRef;
  const width = thumbnail ? 216 : BADGE_WIDTH;
  useLayoutEffect(() => {
    if (ref.current) drawBadge(ref.current, art, look, name, portrait?.image, width);
  }, [art, look, name, portrait, ref, width]);
  return <canvas ref={ref} width={width} height={width * BADGE_HEIGHT / BADGE_WIDTH} className="badge-canvas"
    role={thumbnail ? undefined : 'img'} aria-hidden={thumbnail || undefined}
    aria-label={thumbnail ? undefined : `${badgeLooks.find((item) => item.id === look)!.label} badge for ${name.trim() || 'Your name'}${portrait ? ', with your photo' : ''}`}
    data-look={look}>Your personalised AWS Student Community Day badge.</canvas>;
}

export function BadgeStudio({ mobile = false }: { mobile?: boolean }) {
  const id = useId();
  const [look, setLook] = useState<BadgeLook>(draft.look);
  const [name, setName] = useState(draft.name);
  const [portrait, setPortrait] = useState<Portrait | null>(draft.portrait);
  const [art, setArt] = useState<Artwork | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [readingPhoto, setReadingPhoto] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const uploadRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLCanvasElement>(null);
  const photoRequest = useRef(0);

  useEffect(() => { draft = { name, look, portrait }; }, [name, look, portrait]);
  useEffect(() => {
    let active = true;
    void Promise.all([loadBadgeArtwork(), document.fonts.load('400 88px "Arcade Classic"'),
      document.fonts.load('500 38px "Azeret Mono"'), document.fonts.load('400 14px "Geist Mono"')])
      .then(([artwork]) => { if (active) setArt(artwork); })
      .catch(() => { if (active) setError('The badge artwork could not load. Please refresh and try again.'); });
    return () => { active = false; photoRequest.current++; };
  }, []);

  const choosePhoto = async (file?: File) => {
    if (!file) return;
    setError(''); setMessage('');
    const request = ++photoRequest.current;
    setReadingPhoto(true);
    let url: string | undefined;

    try {
      const validationError = await badgePhotoError(file);

      if (request !== photoRequest.current) return;
      if (validationError) {
        setError(validationError);
        return;
      }

      url = URL.createObjectURL(file);
      const original = new Image(); original.src = url;
      await original.decode();
      const scale = Math.min(1, 1800 / Math.max(original.naturalWidth, original.naturalHeight));
      const resized = document.createElement('canvas');
      resized.width = Math.max(1, Math.round(original.naturalWidth * scale));
      resized.height = Math.max(1, Math.round(original.naturalHeight * scale));
      resized.getContext('2d')!.drawImage(original, 0, 0, resized.width, resized.height);
      const image = new Image(); image.src = resized.toDataURL('image/png');
      await image.decode();
      if (request === photoRequest.current) {
        setPortrait({ image, filename: file.name });
        setMessage('Photo added. Your badge preview is updated.');
      }
    } catch {
      if (request === photoRequest.current) setError('This photo could not be opened. Try another JPG, PNG, or WebP.');
    } finally {
      if (url) URL.revokeObjectURL(url);
      if (request === photoRequest.current) setReadingPhoto(false);
    }
  };

  const download = async () => {
    setError(''); setMessage('');
    if (!portrait) { setError('Add your photo to finish your badge.'); uploadRef.current?.focus(); return; }
    if (!name.trim()) { setError('Add your name to finish your badge.'); nameRef.current?.focus(); return; }
    if (!previewRef.current || !art) return;
    setDownloading(true);
    try {
      await document.fonts.ready;
      const blob = await new Promise<Blob>((resolve, reject) => previewRef.current!.toBlob(
        (result) => result ? resolve(result) : reject(new Error('Export failed')), 'image/png'));
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = badgeFilename(name, look);
      document.body.append(link); link.click(); link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setMessage('Your badge is ready. Check your downloads.');
    } catch { setError('The badge could not be downloaded. Please try again.'); }
    finally { setDownloading(false); }
  };

  return <section className="badge-studio" id="badge-studio" aria-labelledby={`${id}-title`}
    data-node-id={mobile ? '1759:6997' : '1759:6996'}>
    <header className="badge-studio__masthead" data-node-id={mobile ? '1814:3718' : '1814:3452'}>
      <p className="badge-studio__eyebrow">COMMUNITY / THE BADGE STUDIO</p>
      <div className="badge-studio__intro">
        <h2 id={`${id}-title`}><span className="badge-studio__title-start">MAKE IT</span><span className="badge-studio__title-highlight"><ArcadeText>YOURS.</ArcadeText></span></h2>
        <div className="badge-studio__invitation">
          <h3>A little you.<br />A lot of community.</h3>
          <p>Create your badge and let your people know you’ll be there.</p>
        </div>
      </div>
    </header>
    <div className="badge-studio__workbench" data-node-id={mobile ? undefined : '1814:3462'}>
      <div className="badge-studio__press" data-node-id={mobile ? '1814:3728' : '1814:3463'}>
        <div className="badge-studio__preview-label"><p>01 / CHOOSE YOUR LOOK</p><span>LIVE PREVIEW</span></div>
        <div className="badge-studio__print-bed" aria-busy={!art}>
          <img className="badge-studio__grid" src={mobile ? '/assets/1759-6997-be79d.svg' : '/assets/1759-6996-9c749.svg'} alt="" />
          <img className="badge-studio__crop-marks" src={mobile ? '/assets/1759-6997-c3470.svg' : '/assets/1759-6996-c2d14.svg'} alt="" />
          <div className="badge-studio__preview">
            {art ? <BadgeCanvas art={art} look={look} name={name} portrait={portrait} canvasRef={previewRef} />
              : <p className="badge-studio__preparing">Preparing your badge…</p>}
          </div>
        </div>
        <div className="badge-studio__looks" role="group" aria-label="Choose your badge look">
          {badgeLooks.map((item, index) => <button key={item.id} type="button" className="badge-studio__look"
            aria-pressed={look === item.id} aria-label={item.label} onClick={() => { setLook(item.id); setMessage(''); }}
            data-node-id={item.node}>
            <div className="badge-studio__thumbnail">{art && <BadgeCanvas art={art} look={item.id} thumbnail />}</div>
            <span className="badge-studio__look-label"><strong>{item.label}</strong>
              <small>{look === item.id ? '✓ SELECTED' : `0${index + 1} / LOOK`}</small></span>
          </button>)}
        </div>
      </div>
      <form className="badge-studio__editor" data-node-id={mobile ? '1814:3890' : '1814:3623'}
        onSubmit={(event) => { event.preventDefault(); void download(); }}>
        <div className="badge-studio__editor-intro"><p className="badge-studio__eyebrow">02 / MAKE IT PERSONAL</p><h3>Your face. Your name.</h3></div>
        <div className="badge-studio__photo-field">
          <div className="badge-studio__photo-label"><label htmlFor={`${id}-photo`}>YOUR PHOTO</label><span>{portrait ? '✓ ADDED' : 'TO ADD'}</span></div>
          <div className="badge-studio__photo-row">
            <img className="badge-studio__photo-thumbnail" src={portrait?.image.src ?? '/assets/1759-6996-99e3c.svg'} alt={portrait ? 'Your selected photo' : ''} />
            <div className="badge-studio__photo-actions"><p title={portrait?.filename}>{portrait?.filename ?? 'No photo selected'}</p>
              <button ref={uploadRef} className="site-button badge-studio__upload" data-button-tone="navy" data-button-hover="cyan"
                type="button" disabled={readingPhoto} onClick={() => fileRef.current?.click()}>
                <span>{readingPhoto ? 'Opening photo…' : portrait ? 'Change photo' : 'Upload photo'}</span>
                <img src="/assets/1759-6996-0b485.svg" alt="" width="22" height="22" />
              </button>
              <input ref={fileRef} id={`${id}-photo`} className="badge-studio__file" type="file" accept="image/jpeg,image/png,image/webp"
                tabIndex={-1} onChange={(event) => { void choosePhoto(event.currentTarget.files?.[0]); event.currentTarget.value = ''; }} />
            </div>
          </div>
          <p className="badge-studio__hint">Choose a clear photo with your face in focus.</p>
        </div>
        <div className="badge-studio__name-field"><label htmlFor={`${id}-name`}>YOUR NAME</label>
          <input ref={nameRef} id={`${id}-name`} autoComplete="name" type="text" maxLength={48} placeholder="Your name" value={name}
            aria-describedby={`${id}-name-hint`} onChange={(event) => { setName(event.target.value); setMessage(''); setError(''); }} />
          <p className="badge-studio__hint" id={`${id}-name-hint`}>This is how you’ll appear on your badge.</p>
        </div>
        <div className="badge-studio__download" data-node-id={mobile ? '1814:3914' : '1814:3647'}>
          <p className="badge-studio__eyebrow">03 / READY FOR YOUR FEED</p><h3>Your next hello<br />starts here.</h3>
          <button className="site-button" data-button-tone="navy" data-button-hover="white" type="submit" disabled={!art || readingPhoto || downloading}>
            <span>{downloading ? 'Preparing PNG…' : 'Download my badge'}</span><img src="/assets/1759-6996-0b485.svg" alt="" width="22" height="22" />
          </button><p className="badge-studio__export-size">1080 × 1350 / PNG</p>
        </div>
        {error && <p className="badge-studio__error" role="alert">{error}</p>}
        <p className="badge-studio__status" role="status">{message}</p>
      </form>
    </div>
  </section>;
}
