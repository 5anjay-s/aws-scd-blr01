import { SiteLink } from './SiteLink';

const imgArrow = '/assets/865-7675-207b4.svg';

export function RegistrationButton() {
  return (
    <SiteLink buttonTone="orange" className="d-70b8e5e9d0" data-node-id="5:29" href="/registration">
      <p className="d-cf01328ee8" data-node-id="5:30">Register now</p>
      <div className="d-4725149c0e" data-node-id="15:32" data-name="Arrow">
        <img alt="" className="d-511e8f31d4" src={imgArrow} />
      </div>
    </SiteLink>
  );
}
