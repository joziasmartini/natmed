import "./Logo.sass";
import { Heartbeat } from "phosphor-react";

export default function Logo() {
  return (
    <div className="logo" data-aos="zoom-in">
      <Heartbeat size={80} />
    </div>
  );
}
