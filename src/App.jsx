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
    location: "Miami FL",
    fromDate: "02-28-2004",
    toDate: "05-24-2008",
  },
  {
    id: crypto.randomUUID(),
    schoolName: "Harvard",
    title: "Chemist",
    location: "San Francisco CA",
    fromDate: "02-05-2004",
    toDate: "05-08-2008",
  },
];

const initWorkExp = [
  {
    id: crypto.randomUUID(),
    companyName: "Google",
    positionTitle: "Front-End",
    location: 'Louisville KY',
    mainResp: "- Create better apps",
    fromDate: "02-05-2004",
    toDate: "02-05-2010",
  },
  {
    id: crypto.randomUUID(),
    companyName: "Facebook",
    positionTitle: "Back-End",
    location: 'Louisville KY',
    mainResp: "- Create stronger apps",
    fromDate: "02-05-2004",
    toDate: "02-05-2010",
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
