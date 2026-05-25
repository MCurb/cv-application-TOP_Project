import { FormSection } from "./FormSection";

export function SideForms({
  generalInfo,
  education,
  workExp,
  onGralFormSubmit,
  onEducationSubmit,
  onWorkExpSubmit,
}) {
  return (
    <>
      <aside>
        <FormSection
          sectionType={"generalInfo"}
          entries={generalInfo}
          onSubmit={onGralFormSubmit}
        ></FormSection>
        <FormSection
          sectionType={"education"}
          entries={education}
          onSubmit={onEducationSubmit}
        ></FormSection>
        <FormSection
          sectionType={"work"}
          entries={workExp}
          onSubmit={onWorkExpSubmit}
        ></FormSection>
      </aside>
    </>
  );
}
