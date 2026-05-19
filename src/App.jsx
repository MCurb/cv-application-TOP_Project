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

  return (
    <>
      <Card>
        <h1>General Info:</h1>
        <p>Full Name: {gralInfo.fullName}</p>
        <p>Email: {gralInfo.email}</p>
        <p>Number: {gralInfo.number}</p>
        <Button text={"Edit"} id={gralInfo.id} />
      </Card>
      <Card>
        <h1>Education:</h1>
        <p>School Name: {education.schoolName}</p>
        <p>Title: {education.title}</p>
        <p>Study Date: {education.studyDate}</p>
      </Card>
      <GralForm onFormSubmit={(inputData) => setGralInfo({...gralInfo, ...inputData})} />
      <EducForm onFormSubmit={(inputData) => setEducation({...education, ...inputData})}/>
    </>
  );
}

export default App;
