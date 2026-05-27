export function Card({ groupOne, groupTwo, className = "resume-card" }) {
  return (
    <div className={className}>
      <div className="group-one">{groupOne}</div>
      <div className="group-two"> {groupTwo}</div>
    </div>
  );
}
