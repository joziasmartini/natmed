import "./Title.sass"

type Props = {
  text: string; // The text to display on the title
  size: "small" | "medium" | "large"; // Size of the title
}

export default function Title({text, size}: Props) {
  return (
    <div>
      <h1 className={`title title--${size}`}>{text}</h1>
    </div>
  )
}