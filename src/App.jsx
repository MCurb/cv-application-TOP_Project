import { act, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { GralForm } from "./components/GralForm";
import { EducForm } from "./components/EducForm";

function App() {
  const initialGralInfo = {
    id: crypto.randomUUID(),
    renderKey: crypto.randomUUID(),
    fullName: "",
    email: "",
    number: "",
  };
  const [gralInfo, setGralInfo] = useState(initialGralInfo);

  const initialEducationInfo = {
    id: crypto.randomUUID(),
    renderKey: crypto.randomUUID(),
    schoolName: "",
    title: "",
    studyDate: "",
  };
  const [education, setEducation] = useState(initialEducationInfo);

  const [activeForms, setActiveForms] = useState([gralInfo.id, education.id]);

  function handleFormSubmit(inputData, e) {
    const { dataset } = e.target;
    setActiveForms(activeForms.filter((formId) => formId !== dataset.formId));

    if (dataset.formId === gralInfo.id) {
      setGralInfo({ ...gralInfo, ...inputData });
    }

    if (dataset.formId === education.id) {
      setEducation({ ...education, ...inputData });
    }
  }

  function handleEditBtn(e) {
    const { dataset } = e.target;
    if (activeForms.includes(dataset.id)) return;

    setActiveForms([...activeForms, dataset.id]);
  }

  function handleDeleteBtn(e) {
    const { dataset } = e.target;
    if (dataset.id === gralInfo.id) {
      setGralInfo({ ...initialGralInfo, id: gralInfo.id });
      
      if (!activeForms.includes(gralInfo.id)) {
        setActiveForms([...activeForms, gralInfo.id]);
      }
    }
    if (dataset.id === education.id) {
      setEducation({ ...initialEducationInfo, id: education.id });

      if (!activeForms.includes(education.id)) {
        setActiveForms([...activeForms, education.id]);
      }
    }
  }

  return (
    <>
      <Card>
        <h1>General Info:</h1>
        <p>Full Name: {gralInfo.fullName}</p>
        <p>Email: {gralInfo.email}</p>
        <p>Number: {gralInfo.number}</p>
        <Button onClick={handleEditBtn} text={"Edit"} id={gralInfo.id} />
        <Button onClick={handleDeleteBtn} text={"Delete"} id={gralInfo.id} />
      </Card>
      <Card>
        <h1>Education:</h1>
        <p>School Name: {education.schoolName}</p>
        <p>Title: {education.title}</p>
        <p>Study Date: {education.studyDate}</p>
        <Button onClick={handleEditBtn} text={"Edit"} id={education.id} />
        <Button onClick={handleDeleteBtn} text={"Delete"} id={education.id} />
      </Card>

      <GralForm
        key={gralInfo.renderKey}
        id={gralInfo.id}
        isActive={activeForms.includes(gralInfo.id)}
        onFormSubmit={(inputData, e) => handleFormSubmit(inputData, e)}
      />
      <EducForm
        key={education.renderKey}
        id={education.id}
        isActive={activeForms.includes(education.id)}
        onFormSubmit={(inputData, e) => handleFormSubmit(inputData, e)}
      />
    </>
  );
}

export default App;
