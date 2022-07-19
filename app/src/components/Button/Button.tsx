import { Link } from "react-router-dom";
import "./Button.sass";

type Props = {
  text: string;
  type: "primary" | "secondary" | "danger";
  action: Function;
  linkTo: string;
};

export default function Button({ text, type, action, linkTo }: Props) {
  return (
    <Link to={linkTo}>
      <div 
        className={`button ${type}`} 
        onClick={(event) => action("login", event)}
      >
        <span className="text">{text}</span>
      </div>
    </Link>
  );
}
