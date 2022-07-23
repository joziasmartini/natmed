import "./NavBar.sass";
import { House, GearSix, Question, User } from "phosphor-react";
import { Link } from "react-router-dom";

type Props = {
  theme: string;
};

function unfinishedFunctionality() {
  alert("Essa funcionalidade ainda não está disponível.");
}

export default function Navbar({ theme }: Props) {
  return (
    <div className="navbar">
      <span className="navbar-option">
        <Link to="/">
          <House size={30} />
        </Link>
      </span>
      <span 
        className="navbar-option" 
        onClick={unfinishedFunctionality}
      >
        <GearSix size={30} />
      </span>
      <span 
        className="navbar-option" 
        onClick={unfinishedFunctionality}
      >
        <Question size={30} />
      </span>
      <span 
        className="navbar-option" 
        onClick={unfinishedFunctionality}
      >
        <User size={30} />
      </span>
    </div>
  );
}
