import { useState } from "react";
import { GeneralForm } from "./GralForm";
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

  const isEntryIterable = Array.isArray(entries);

  function handleFormSubmit(inputData) {
    // Refresh Forms
    setEducInputs(educInitData);
    setWorkExpInputs(workInitData);

    // Is Personal Details Obj
    if (!isEntryIterable) {
      onSubmit({ ...entries, ...inputData });
      return;
    }

    // Edit Info
    const objectExists = entries.some((entry) => inputData.id === entry.id);
    if (!objectExists) {
      onSubmit([...entries, { id: crypto.randomUUID(), ...inputData }]);
      return;
    }

    // Add New Info
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

        {isEntryIterable && (
          <MinCardsList
            sectionType={sectionType}
            entries={entries}
            onEdit={handleEditBtn}
            onDelete={handleDeleteBtn}
          ></MinCardsList>
        )}

        {sectionType === "generalInfo" && (
          <GeneralForm
            inputsData={gralInfoInputs}
            onChange={setGralInfoInputs}
            onSubmit={handleFormSubmit}
          ></GeneralForm>
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
