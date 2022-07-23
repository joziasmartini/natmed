import "./Button.sass";

type Props = {
  text: string; // The text to display on the button
  type: "primary" | "secondary" | "danger"; // Type of button to apply the styles  
  action: Function; // Function to be called when the button is clicked
  width?: number; // Max width of the button
  disabled?: boolean; // If the button is disabled
};

export default function Button({ text, type, action, width, disabled }: Props) {
  return (
    <button 
      className={`
        button 
        button--${type} 
        button--${disabled ? "disabled" : ""}
      `}
      onClick={(event) => action("login", event)}
      style={{ width: width }}
      disabled={disabled}
    >
      <span className="text">{text}</span>
    </button>
  );
}
