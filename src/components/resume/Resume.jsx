import "./Resume.css";
import { InfoSection } from "./InfoSection";
import { ResumeHeader } from "./ResumeHeader";

export function Resume({ generalInfo, education, workExp }) {
  return (
    <main className="resume-cont">
      <ResumeHeader generalInfo={generalInfo}></ResumeHeader>
      <InfoSection entries={education} sectionType={"education"}></InfoSection>
      <InfoSection entries={workExp} sectionType={"work"}></InfoSection>
    </main>
  );
}
