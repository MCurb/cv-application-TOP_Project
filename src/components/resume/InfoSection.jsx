import { Card } from "../ui/Card";

export function InfoSection({ entries, sectionType }) {
  const sectionTitle = {
    education: "Education",
    work: "Professional Experience",
  };
  return (
    <>
      <h2>{sectionTitle[sectionType]}</h2>
      <ul>
        {sectionType === "education" &&
          entries.map((entry) => (
            <Card key={entry.id}>
              <p>School Name: {entry.schoolName}</p>
              <p>Title: {entry.title}</p>
              <p>Study Date: {entry.studyDate}</p>
            </Card>
          ))}

        {sectionType === "work" &&
          entries.map((entry) => (
            <Card key={entry.id}>
              <p>Company Name: {entry.companyName}</p>
              <p>Job Title: {entry.positionTitle}</p>
              <p>Main Responsibilities: {entry.mainResp}</p>
              <p>From: {entry.fromDate}</p>
              <p>To: {entry.toDate}</p>
            </Card>
          ))}
      </ul>
    </>
  );
}
