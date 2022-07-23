import "./Button.sass";

type Props = {
  text: string; // The text to display on the button
  type: "primary" | "secondary" | "danger"; // Type of button to apply the styles  
  action: Function; // Function to be called when the button is clicked
};

export default function Button({ text, type, action }: Props) {
  return (
    <div 
      className={`button ${type}`} 
      onClick={(event) => action("login", event)}
    >
      <span className="text">{text}</span>
    </div>
  );
}
