export function Button({ type = "button", className, text, onClick, onHover, id, children}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      onPointerOver={onHover}
      data-id={id}
    >
      {text}
      {children}
    </button>
  );
}
