import { useState } from "react";
import "./App.css";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { GralForm } from "./components/GralForm";
import { EducForm } from "./components/EducForm";
import { PracticalExpForm } from "./components/PracticalExpForm";

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

  const initialPractExpInfo = {
    id: crypto.randomUUID(),
    renderKey: crypto.randomUUID(),
    companyName: "",
    positionTitle: "",
    mainResp: "",
    fromDate: "",
    toDate: "",
  };
  const [practExp, setPractExp] = useState(initialPractExpInfo);

  const [activeForms, setActiveForms] = useState([
    gralInfo.id,
    education.id,
    practExp.id,
  ]);

  function handleFormSubmit(inputData, e) {
    const { dataset } = e.target;
    setActiveForms(activeForms.filter((formId) => formId !== dataset.formId));

    if (dataset.formId === gralInfo.id) {
      setGralInfo({ ...gralInfo, ...inputData });
    }

    if (dataset.formId === education.id) {
      setEducation({ ...education, ...inputData });
    }

    if (dataset.formId === practExp.id) {
      setPractExp({ ...practExp, ...inputData });
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
    if (dataset.id === practExp.id) {
      setPractExp({ ...initialPractExpInfo, id: practExp.id });

      if (!activeForms.includes(practExp.id)) {
        setActiveForms([...activeForms, practExp.id]);
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
      <Card>
        <h1>Practical Experience</h1>
        <p>Company Name: {practExp.companyName}</p>
        <p>Job Title: {practExp.positionTitle}</p>
        <p>Main Responsibilities: {practExp.mainResp}</p>
        <p>From: {practExp.fromDate}</p>
        <p>To: {practExp.toDate}</p>
        <Button onClick={handleEditBtn} text={"Edit"} id={practExp.id} />
        <Button onClick={handleDeleteBtn} text={"Delete"} id={practExp.id} />
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
      <PracticalExpForm
        key={practExp.renderKey}
        id={practExp.id}
        isActive={activeForms.includes(practExp.id)}
        onFormSubmit={(inputData, e) => handleFormSubmit(inputData, e)}
      />
    </>
  );
}

export default App;
