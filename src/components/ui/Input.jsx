export function Input({
  type = "text",
  placeholder,
  label,
  onChange,
  id,
  datasetId,
  name,
  required,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        name={name}
        data-form-id={datasetId}
        required={required}
      />
    </>
  );
}
