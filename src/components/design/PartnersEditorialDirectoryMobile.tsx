// Source: Figma 00/ Final, node 866:8582.
import { SponsorLogo } from "../SponsorLogo";
import { siteSponsors } from "../../site-config";
const imgTelescopeTripodFixed = "/assets/866-8582-232fa.svg";
const imgTelescopeBarrelSeparateRotatingHead = "/assets/866-8582-180df.svg";

export default function PartnersEditorialDirectoryMobile() {
  return (
    <div className="d-389801b842" data-node-id="866:8582" data-name="Partners / Editorial directory — Mobile">
      <div className="d-1552e25ad7" data-node-id="1406:639" data-name="Directory / Introduction">
        <p className="d-6e37333e29" data-node-id="1406:640">
          OUR PARTNER LINEUP
        </p>
        <div className="d-20e6745efc" data-node-id="1406:641">
          <p className="d-27cc6eebfe">The people behind</p>
          <p className="d-b4067b5592">the possibility.</p>
        </div>
        <div className="d-10c4b27c8f" data-node-id="1406:642">
          <p className="d-8c06a6239d">Meet the organizations</p>
          <p className="d-7600d62c87">helping make the day possible.</p>
        </div>
      </div>
      <div className="d-45cea8108a" data-node-id="1406:643" data-name="Rule / Editorial partner divider" />
      <div className="d-57e020a7b5" data-node-id="1406:644" data-name="01 / In the spotlight">
        <div className="d-a2bf04d1a7" data-node-id="1406:645" data-name="Category / Editorial heading">
          <p className="d-6e37333e29" data-node-id="1406:646">
            01 / IN THE SPOTLIGHT
          </p>
          <p className="d-ec7f647346" data-node-id="1406:647">
            A bigger start.
          </p>
          <div className="d-aec5541f52" data-node-id="1406:648">
            <p className="d-4b12b4b4b6">Helping curiosity</p>
            <p className="d-4baab81ea1">become possibility.</p>
          </div>
        </div>
        <div className="d-a2bf04d1a7" data-node-id="1406:649" data-name="Title sponsor / AWS">
          <p className="d-6e37333e29" data-node-id="1406:650">
            {siteSponsors.title.role}
          </p>
          <SponsorLogo sponsor="title" data-node-id="1406:651" />
          <p className="d-2d44ba2695" data-node-id="1406:652">
            AMAZON WEB SERVICES
          </p>
        </div>
      </div>
      <div className="d-45cea8108a" data-node-id="1406:653" data-name="Rule / Editorial partner divider" />
      <div className="d-57e020a7b5" data-node-id="1406:654" data-name="02 / Ecosystem">
        <div className="d-a2bf04d1a7" data-node-id="1406:655" data-name="Category / Editorial heading">
          <p className="d-6e37333e29" data-node-id="1406:656">
            02 / ECOSYSTEM
          </p>
          <p className="d-ec7f647346" data-node-id="1406:657">
            Shared momentum.
          </p>
          <div className="d-aec5541f52" data-node-id="1406:658">
            <p className="d-4b12b4b4b6">Ideas grow further</p>
            <p className="d-4baab81ea1">with good company.</p>
          </div>
        </div>
        <div className="d-a238f29836" data-node-id="1406:659" data-name="Directory / Supporting sponsors">
          <div className="d-a2bf04d1a7" data-node-id="1406:660" data-name="Powered by / OpenAI">
            <p className="d-6e37333e29" data-node-id="1406:661">
              {siteSponsors.poweredBy.role}
            </p>
            <SponsorLogo sponsor="poweredBy" data-node-id="1406:662" />
          </div>
          <div className="d-a2bf04d1a7" data-node-id="1406:664" data-name="Workshop sponsor / MongoDB">
            <p className="d-6e37333e29" data-node-id="1406:665">
              {siteSponsors.workshop.role}
            </p>
            <SponsorLogo sponsor="workshop" data-node-id="1406:666" />
          </div>
        </div>
      </div>
      <div className="d-82c55335ad" data-node-id="1406:683" data-name="Discovery / Telescope and announcement status">
        <div className="d-5022e5d9c4" data-node-id="1406:685" data-name="Telescope / Tripod — fixed">
          <img alt="" className="d-511e8f31d4" src={imgTelescopeTripodFixed} />
        </div>
        <div className="d-63294b4232" data-node-id="1406:690">
          <div className="d-309ffa8f58">
            <div className="d-12971d8d60" data-name="Telescope / Barrel — separate rotating head">
              <img alt="" className="d-511e8f31d4" src={imgTelescopeBarrelSeparateRotatingHead} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
