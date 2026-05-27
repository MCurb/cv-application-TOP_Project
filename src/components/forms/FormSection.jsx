import { useState } from "react";
import { MinCard } from "../ui/MinCard";
import { GralForm } from "./GralForm";
import { EducForm } from "./EducForm";
import { ExperienceForm } from "./ExperienceForm";

export function FormSection({ sectionType, entries, onSubmit }) {
  const educInitData = {
    schoolName: "",
    title: "",
    location: "",
    fromDate: "",
    toDate: "",
  };
  const [educInputs, setEducInputs] = useState(educInitData);

  const workInitData = {
    id: crypto.randomUUID(),
    companyName: "",
    positionTitle: "",
    location: "",
    mainResp: "",
    fromDate: "",
    toDate: "",
  };
  const [workExpInputs, setWorkExpInputs] = useState(workInitData);

  const gralInfoInitData = {
    fullName: "",
    requestedPosit: "",
    email: "",
    number: "",
    location: "",
  };
  const [gralInfoInputs, setGralInfoInputs] = useState(gralInfoInitData);

  const sectionTitle = {
    generalInfo: "Personal Details",
    education: "Education",
    work: "Experience",
  };

  const isIterable = Array.isArray(entries);

  function handleFormSubmit(inputData) {
    setEducInputs(educInitData);
    setWorkExpInputs(workInitData);

    if (!isIterable) {
      onSubmit({ ...entries, ...inputData });
      return;
    }

    const objectExists = entries.find((entry) => inputData.id === entry.id);
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
        {isIterable &&
          sectionType === "education" &&
          entries.map((entry) => (
            <MinCard
              key={entry.id}
              onEdit={handleEditBtn}
              onDelete={handleDeleteBtn}
              cardTitle={entry.schoolName}
              id={entry.id}
            />
          ))}
        {isIterable &&
          sectionType === "work" &&
          entries.map((entry) => (
            <MinCard
              key={entry.id}
              onEdit={handleEditBtn}
              onDelete={handleDeleteBtn}
              cardTitle={entry.companyName}
              id={entry.id}
            />
          ))}

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
