import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { GralForm } from "./components/GralForm";
import { EducForm } from "./components/EducForm";

function App() {
  const [gralInfo, setGralInfo] = useState({
    id: crypto.randomUUID(),
    fullName: "",
    email: "",
    number: "",
  });

  const [education, setEducation] = useState({
    id: crypto.randomUUID(),
    schoolName: "",
    title: "",
    studyDate: "",
  });

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
    setActiveForms([...activeForms, dataset.id])
  }

  return (
    <>
      <Card>
        <h1>General Info:</h1>
        <p>Full Name: {gralInfo.fullName}</p>
        <p>Email: {gralInfo.email}</p>
        <p>Number: {gralInfo.number}</p>
        <Button onClick={handleEditBtn} text={"Edit"} id={gralInfo.id} />
      </Card>
      <Card>
        <h1>Education:</h1>
        <p>School Name: {education.schoolName}</p>
        <p>Title: {education.title}</p>
        <p>Study Date: {education.studyDate}</p>
        <Button onClick={handleEditBtn} text={"Edit"} id={education.id} />
      </Card>

      <GralForm
        id={gralInfo.id}
        isActive={activeForms.includes(gralInfo.id)}
        onFormSubmit={(inputData, e) => handleFormSubmit(inputData, e)}
      />
      <EducForm
        id={education.id}
        isActive={activeForms.includes(education.id)}
        onFormSubmit={(inputData, e) => handleFormSubmit(inputData, e)}
      />
    </>
  );
}

export default App;
