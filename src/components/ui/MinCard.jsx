import { Button } from "./Button";

export function MinCard({ children, onEdit, onDelete, id }) {
  return (
    <div>
      {children}
      <Button onClick={onEdit} text={"Edit"} id={id} />
      <Button onClick={onDelete} text={"Delete"} id={id} />
    </div>
  );
}
