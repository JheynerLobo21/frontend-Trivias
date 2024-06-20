import "../../css/pacman.scss";
import "../../css/lightBulb.css";
import { LightBulb } from "./LightBulb";

export function Pacman() {
  return (
    <>
    <div className="frame">
      <svg className="pacman">
        <circle cx="50" cy="50" r="25" />
      </svg>
      <svg className="eye">
        <circle cx="6" cy="6" r="6" />
      </svg>
      <div className="frame-light">
    <LightBulb position={{ left: "-110px" }} />
    <LightBulb position={{ left: "-55px" }} />
    <LightBulb position={{ left: "0px" }} />
    <LightBulb position={{ left: "55px" }} />
    <LightBulb position={{ left: "110px" }} />
    <LightBulb position={{ left: "165px" }} />
    <LightBulb position={{ left: "220px" }} />
    <LightBulb position={{ left: "275px" }} />
    <LightBulb position={{ left: "330px" }} />
    <LightBulb position={{ left: "385px" }} />
    <LightBulb position={{ left: "440px" }} />
    <LightBulb position={{ left: "495px" }} />
    <LightBulb position={{ left: "550px" }} />
    <LightBulb position={{ left: "605px" }} />
    <LightBulb position={{ left: "660px" }} />
  </div>
    </div>
    
  </>
  );
}
