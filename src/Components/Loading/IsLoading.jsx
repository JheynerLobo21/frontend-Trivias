import "../../css/prueba.scss";
import { LightBulb } from "./LightBulb";
import { Pacman } from "./Pacman";

export function IsLoading() {
  return (
    <>
      <Pacman />
      <div className="loading-frame">
        <div className="loading-pacman"></div>
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </>
  );
}
