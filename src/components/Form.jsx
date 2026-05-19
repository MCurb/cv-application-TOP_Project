export function Form({ children, onSubmit, className, id }) {
  return (
    <form className={className} data-form-id={id} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
