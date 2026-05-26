import { Button } from "./Button";

export function Form({ onSubmit, isActive, children }) {
  return (
    <form className={isActive ? "visible" : "hidden"} onSubmit={onSubmit}>
      {children}
      <div className="form-actions">
        <Button text={"Cancel"} className='cancel-btn'></Button>
        <Button type="submit" text={"Submit"} className='submit-btn'></Button>
      </div>
    </form>
  );
}
