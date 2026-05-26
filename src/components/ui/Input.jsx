export function Input({
  type = "text",
  placeholder,
  label,
  onChange,
  id,
  datasetId,
  name,
  value,
  required,
}) {
  return (
      <div className="label-input-group">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          id={id}
          name={name}
          data-form-id={datasetId}
          required={required}
        />
      </div>
  );
}
