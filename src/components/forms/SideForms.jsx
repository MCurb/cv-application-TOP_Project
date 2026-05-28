import "./SideForms.css";
import { FormSection } from "./FormSection";

export function SideForms({
  generalInfo,
  education,
  workExp,
  onGralFormSubmit,
  onEducationSubmit,
  onWorkExpSubmit,
}) {
  const stateData = {
    generalInfo: [generalInfo, onGralFormSubmit],
    education: [education, onEducationSubmit],
    work: [workExp, onWorkExpSubmit],
  };

  return (
    <aside className="sidebar">
      {Object.entries(stateData).map(([dataGroup, data], i) => {
        const [state, setState] = data;
        return (
          <FormSection
            key={i}
            sectionType={dataGroup}
            entries={state}
            onSubmit={setState}
          ></FormSection>
        );
      })}
    </aside>
  );
}
