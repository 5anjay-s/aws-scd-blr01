import { SpeakerQuotation } from './SpeakerQuotation';

export function SpeakerIntro({ mobile = false }: { mobile?: boolean }) {
  const node = (desktop: string, compact: string) => mobile ? compact : desktop;
  return <header className={`speaker-intro${mobile ? ' speaker-intro--mobile' : ''}`}
    data-node-id={node('1127:2300', '1170:549')}>
    <p className="speaker-intro__index" data-node-id={node('1127:2302', '1170:551')}>03 / THE SPEAKERS</p>
    <div className="speaker-intro__body" data-node-id={node('1127:2304', '1170:557')}>
      <h2 className="speaker-intro__title arcade-heading" data-node-id={node('1127:2305', '1170:553')}>SPEAKERS</h2>
      <p className="speaker-intro__description" data-node-id={node('1127:2312', '1170:558')}>
        Meet the speakers joining us on 5 November.
      </p>
      <div className="speaker-intro__quotation" data-node-id={node('1127:2306', '1170:559')}>
        <SpeakerQuotation className="speaker-intro__art"
          src={mobile ? '/assets/1168-494-a5a4a.svg' : '/assets/860-5144-5a444.svg'} />
      </div>
    </div>
  </header>;
}
