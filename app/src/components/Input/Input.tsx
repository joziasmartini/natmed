import "./Input.sass";

type Props = {
  label?: string;
  type: string;
  placeholder: string;
};

export default function Input({ label, type, placeholder }: Props) {
  return (
    <div className="input">
      {label && (
        <label className="input-label" htmlFor="input">
          {label}
        </label>
      )}
      <input className="input-input" type={type} placeholder={placeholder} />
    </div>
  );
}
