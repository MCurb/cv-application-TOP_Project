export function Button({ type = "button", className, text, onClick, onHover }) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      onPointerOver={onHover}
    >
      {text}
    </button>
  );
}
