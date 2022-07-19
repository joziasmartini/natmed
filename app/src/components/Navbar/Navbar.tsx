import "./Navbar.sass";
import { House, GearSix, Question, User } from "phosphor-react";

type Props = {
  theme: string;
};

export default function Navbar({ theme }: Props) {
  return (
    <div className="navbar">
      <span className="navbar-option">
        <House size={30} />
      </span>
      <span className="navbar-option">
        <GearSix size={30} />
      </span>
      <span className="navbar-option">
        <Question size={30} />
      </span>
      <span className="navbar-option">
        <User size={30} />
      </span>
    </div>
  );
}
