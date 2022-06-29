import "./Button.sass";

type Props = {
  text: string;
  type: "primary" | "secondary" | "danger";
};

export default function Button({ text, type }: Props) {
  return <div className={`button ${type}`}>{text}</div>;
}
