import "./Logo.sass";
import { Heartbeat } from "phosphor-react";

export default function Logo() {
  return (
    <div className="logo">
      <Heartbeat size={80} />
    </div>
  );
}
