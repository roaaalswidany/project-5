import "./Input.css";

function Input({ type, placeholder, required }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="input"
    />
  );
}

export default Input;
