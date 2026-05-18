export function Form({ children, onSubmit, className }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
