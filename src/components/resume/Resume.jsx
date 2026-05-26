import "./Resume.css";
import { InfoSection } from "./InfoSection";

export function Resume({ generalInfo, education, workExp }) {
  return (
    <main className="resume-cont">
      <h1>My Resume</h1>
      <h2>{generalInfo.fullName}</h2>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.number}</p>
      <InfoSection entries={education} sectionType={"education"}></InfoSection>
      <InfoSection entries={workExp} sectionType={"work"}></InfoSection>
    </main>
  );
}
