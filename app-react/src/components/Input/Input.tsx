type Props = {
  label?: string;
  placeholder: string;
};

export default function Input({ label, placeholder }: Props) {
  return (
    <div className="input">
      {label && (
        <label className="input-label" htmlFor="input">
          {label}
        </label>
      )}
      <input className="input-input" type="text" placeholder={placeholder} />
    </div>
  );
}
