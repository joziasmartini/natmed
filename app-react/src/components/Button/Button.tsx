import "./Button.sass";

type Props = {
  text: string;
  type?: string;
};

export default function Button({ text, type }: Props) {
  return <div className="button">{text}</div>;
}
