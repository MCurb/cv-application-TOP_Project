import { MinCard } from "../ui/MinCard";

export function MinCardsList({ sectionType, entries, onEdit, onDelete }) {
  return (
    <ul className="min-cards-wrapper">
      {sectionType === "education" &&
        entries.map((entry) => (
          <MinCard
            key={entry.id}
            onEdit={onEdit}
            onDelete={onDelete}
            cardTitle={entry.schoolName}
            id={entry.id}
          />
        ))}
      {sectionType === "work" &&
        entries.map((entry) => (
          <MinCard
            key={entry.id}
            onEdit={onEdit}
            onDelete={onDelete}
            cardTitle={entry.companyName}
            id={entry.id}
          />
        ))}
    </ul>
  );
}
