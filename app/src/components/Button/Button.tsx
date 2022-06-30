import "./Button.sass";

type Props = {
  text: string;
  type: "primary" | "secondary" | "danger";
  action: Function;
};

export default function Button({ text, type, action }: Props) {
  return (
    <div className={`button ${type}`} onClick={() => action("login")}>
      {text}
    </div>
  );
}
