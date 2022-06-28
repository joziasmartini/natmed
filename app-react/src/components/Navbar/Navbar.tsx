import "./Navbar.sass";
import { House, GearSix, Question, User } from "phosphor-react";

type Props = {
  theme: string;
};

export default function Navbar({ theme }: Props) {
  return (
    <div className="navbar">
      <span className="navbar-option">
        <House size={32} />
      </span>
      <span className="navbar-option">
        <GearSix size={32} />
      </span>
      <span className="navbar-option">
        <Question size={32} />
      </span>
      <span className="navbar-option">
        <User size={32} />
      </span>
    </div>
  );
}
