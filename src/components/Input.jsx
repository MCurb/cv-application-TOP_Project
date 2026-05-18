export function Input({ type = "text", placeholder, name, onChange, id }) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} id={id} />
    </>
  );
}
