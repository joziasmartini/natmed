import "./Button.sass";

type Props = {
  text: string;
  type: "primary" | "secondary" | "danger";
  action: "login";
};

export default function Button({ text, type }: Props) {
  const clickHandle = () => {
    console.log("Clicked");
  };

  return (
    <div className={`button ${type}`} onClick={() => clickHandle()}>
      {text}
    </div>
  );
}
