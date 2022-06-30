import "./Input.sass";

type Props = {
  label?: string;
  type: string;
  placeholder: string;
  action: Function;
};

export default function Input({ label, type, placeholder, action }: Props) {
  return (
    <div className="input">
      {label && (
        <label className="input-label" htmlFor="input">
          {label}
        </label>
      )}
      <input
        className="input-input"
        type={type}
        placeholder={placeholder}
        onChange={(event) => action(event.target.value)}
      />
    </div>
  );
}
