import { Button } from "../ui/Button";

export function GralInfoCard({ gralInfo, handleDeleteBtn, handleEditBtn }) {
  return (
    <>
      <h1>General Info:</h1>
      <p>Full Name: {gralInfo.fullName}</p>
      <p>Email: {gralInfo.email}</p>
      <p>Number: {gralInfo.number}</p>
      <Button onClick={handleEditBtn} text={"Edit"} id={gralInfo.id} />
      <Button onClick={handleDeleteBtn} text={"Delete"} id={gralInfo.id} />
    </>
  );
}
