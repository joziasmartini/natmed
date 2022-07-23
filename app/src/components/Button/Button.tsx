import "./Button.sass";

type Props = {
  text: string; // The text to display on the button
  type: "primary" | "secondary" | "danger"; // Type of button to apply the styles  
  action: Function; // Function to be called when the button is clicked
  width?: number; // Max width of the button
};

export default function Button({ text, type, action, width }: Props) {
  return (
    <div 
      className={`button button--${type}`} 
      onClick={(event) => action("login", event)}
      style={{ width: width }}
    >
      <span className="text">{text}</span>
    </div>
  );
}
