import "./Navbar.sass";

type Props = {
  options: string[];
};

export default function Navbar({ options }: Props) {
  return (
    <div className="navbar">
      {options.map((opt) => {
        return (
          <span className="navbar-option">
            <span className="navbar-icon"></span>
            {opt}
          </span>
        );
      })}
    </div>
  );
}
