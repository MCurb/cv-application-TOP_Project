export function Textarea({
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
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        name={name}
        data-form-id={datasetId}
        required={required}
      ></textarea>
    </>
  );
}
