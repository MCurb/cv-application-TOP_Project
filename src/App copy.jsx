import { useState } from "react";
import "./App.css";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { GralForm } from "./components/forms/GralForm";
import { EducForm } from "./components/forms/EducForm";
import { PracticalExpForm } from "./components/forms/PracticalExpForm";

// const resumeInfo = {
//   generalInfo: [
//     { id: crypto.randomUUID(), name: "Marcos", number: "564 545 5444" },
//   ],
//   education: [
//     { id: crypto.randomUUID(), schoolName: "MIT", title: "Software Engineer" },
//   ],
//   workExperience: [
//     { id: crypto.randomUUID(), companyName: "Google", position: "Front-End" },
//   ],
// };

const initGnralInfo = {
  id: crypto.randomUUID(),
  fullName: "Marcos Curbeco",
  email: "curbecomarcos@gmail.com",
  number: "564 545 5444",
};

const initEducation = [
  {
    id: crypto.randomUUID(),
    schoolName: "MIT",
    title: "Software Engineer",
    studyDate: "01/02/2009",
  },
  {
    id: crypto.randomUUID(),
    schoolName: "Harvard",
    title: "Chemist",
    studyDate: "18/07/2005",
  },
];

const initWorkExp = [
  {
    id: crypto.randomUUID(),
    companyName: "Google",
    positionTitle: "Front-End",
    mainResp: "- Create better apps",
    fromDate: "25/08/2002",
    toDate: "25/08/2009",
  },
  {
    id: crypto.randomUUID(),
    companyName: "Facebook",
    positionTitle: "Back-End",
    mainResp: "- Create stronger apps",
    fromDate: "18/07/2005",
    toDate: "18/07/2009",
  },
];

export function AppTest() {
  const [generalInfo, setGeneralInfo] = useState(initGnralInfo);
  const [education, setEducation] = useState(initEducation);
  const [workExp, setWorkExp] = useState(initWorkExp);
  return (
    <>
      <SideForms
        generalInfo={generalInfo}
        education={education}
        workExp={workExp}
        onGralFormSubmit={setGeneralInfo}
        onEducationSubmit={setEducation}
        onWorkExpSubmit={setWorkExp}
      ></SideForms>
      <Resume
        generalInfo={generalInfo}
        education={education}
        workExp={workExp}
      ></Resume>
    </>
  );
}

function SideForms({
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

function FormSection({ sectionType, entries, onSubmit }) {
  const educInitData = {
    schoolName: "",
    title: "",
    studyDate: "",
  };
  const [educInputs, setEducInputs] = useState(educInitData);

  const workInitData = {
    id: crypto.randomUUID(),
    companyName: "",
    positionTitle: "",
    mainResp: "",
    fromDate: "",
    toDate: "",
  };
  const [workExpInputs, setWorkExpInputs] = useState(workInitData);

  const gralInfoInitData = {
    fullName: "",
    email: "",
    number: "",
  };
  const [gralInfoInputs, setGralInfoInputs] = useState(gralInfoInitData);

  const sectionTitle = {
    generalInfo: "Personal Details",
    education: "Education",
    work: "Professional Experience",
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
      <h2>{sectionTitle[sectionType]}</h2>
      {isIterable &&
        sectionType === "education" &&
        entries.map((entry) => (
          <MinCard key={entry.id}>
            <h4>{entry.schoolName}</h4>
            <Button onClick={handleEditBtn} text={"Edit"} id={entry.id} />
            <Button onClick={handleDeleteBtn} text={"Delete"} id={entry.id} />
          </MinCard>
        ))}
      {isIterable &&
        sectionType === "work" &&
        entries.map((entry) => (
          <MinCard key={entry.id}>
            <h4>{entry.companyName}</h4>
            <Button onClick={handleEditBtn} text={"Edit"} id={entry.id} />
            <Button onClick={handleDeleteBtn} text={"Delete"} id={entry.id} />
          </MinCard>
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
        <PracticalExpForm
          inputsData={workExpInputs}
          onChange={setWorkExpInputs}
          onSubmit={handleFormSubmit}
        ></PracticalExpForm>
      )}
    </>
  );
}

function MinCard({ children }) {
  return <div>{children}</div>;
}

function Resume({ generalInfo, education, workExp }) {
  return (
    <>
      <main>
        <h1>My Resume</h1>
        <h2>{generalInfo.fullName}</h2>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.number}</p>
        <InfoSection
          entries={education}
          sectionType={"education"}
        ></InfoSection>
        <InfoSection entries={workExp} sectionType={"work"}></InfoSection>
      </main>
    </>
  );
}

function InfoSection({ entries, sectionType }) {
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

export default AppTest;
