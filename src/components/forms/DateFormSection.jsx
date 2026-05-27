export function DateFormSection({ legendText, children }) {
  return (
    <fieldset>
      <legend>{legendText}</legend>
      {children}
    </fieldset>
  );
}
