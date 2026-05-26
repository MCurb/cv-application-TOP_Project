import "./App.css";
import { useState } from "react";
import { SideForms } from "./components/forms/SideForms";
import { Resume } from "./components/resume/Resume";

const initGnralInfo = {
  id: crypto.randomUUID(),
  fullName: "Marcos Curbeco",
  requestedPosit: "Web Developer",
  email: "curbecomarcos@gmail.com",
  number: "564 545 5444",
  location: "SF, CA",
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

function App() {
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

export default App;
