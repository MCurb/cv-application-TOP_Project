import { useState } from "react";
import { GralForm } from "./GralForm";
import { EducForm } from "./EducForm";
import { ExperienceForm } from "./ExperienceForm";
import { MinCardsList } from "./MinCardsList";

const educInitData = {
  schoolName: "",
  title: "",
  location: "",
  fromDate: "",
  toDate: "",
};

const workInitData = {
  id: crypto.randomUUID(),
  companyName: "",
  positionTitle: "",
  location: "",
  mainResp: "",
  fromDate: "",
  toDate: "",
};

const gralInfoInitData = {
  fullName: "",
  requestedPosit: "",
  email: "",
  number: "",
  location: "",
};

export function FormSection({ sectionType, entries, onSubmit }) {
  const [educInputs, setEducInputs] = useState(educInitData);
  const [workExpInputs, setWorkExpInputs] = useState(workInitData);
  const [gralInfoInputs, setGralInfoInputs] = useState(gralInfoInitData);

  const sectionTitle = {
    generalInfo: "Personal Details",
    education: "Education",
    work: "Experience",
  };

  const entryIsIterable = Array.isArray(entries);

  function handleFormSubmit(inputData) {
    setEducInputs(educInitData);
    setWorkExpInputs(workInitData);

    if (!entryIsIterable) {
      onSubmit({ ...entries, ...inputData });
      return;
    }

    const objectExists = entries.some((entry) => inputData.id === entry.id);
    if (!objectExists) {
      onSubmit([...entries, { id: crypto.randomUUID(), ...inputData }]);
      return;
    }

    const updatedEntries = entries.map((entry) =>
      entry.id !== inputData.id ? entry : { ...entry, ...inputData },
    );
    onSubmit(updatedEntries);
  }

  function handleDeleteBtn(e) {
    const { dataset } = e.target;
    const filteredArr = entries.filter((entry) => dataset.id !== entry.id);
    onSubmit(filteredArr);
  }

  function handleEditBtn(e) {
    const { dataset } = e.target;
    // Find the object
    const entry = entries.find((entry) => dataset.id === entry.id);
    // Refill the form
    if (sectionType === "education") setEducInputs(entry);
    if (sectionType === "work") setWorkExpInputs(entry);
  }

  return (
    <>
      <div className="form-section">
        <h2>{sectionTitle[sectionType]}</h2>

        {entryIsIterable && (
          <MinCardsList
            sectionType={sectionType}
            entries={entries}
            onEdit={handleEditBtn}
            onDelete={handleDeleteBtn}
          ></MinCardsList>
        )}

        {sectionType === "generalInfo" && (
          <GralForm
            inputsData={gralInfoInputs}
            onChange={setGralInfoInputs}
            onSubmit={handleFormSubmit}
          ></GralForm>
        )}
        {sectionType === "education" && (
          <EducForm
            inputsData={educInputs}
            onChange={setEducInputs}
            onSubmit={handleFormSubmit}
          ></EducForm>
        )}
        {sectionType === "work" && (
          <ExperienceForm
            inputsData={workExpInputs}
            onChange={setWorkExpInputs}
            onSubmit={handleFormSubmit}
          ></ExperienceForm>
        )}
      </div>
    </>
  );
}
