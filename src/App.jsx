import "./App.css";
import { useEffect, useState } from "react";
import { SideForms } from "./components/forms/SideForms";
import { Resume } from "./components/resume/Resume";

const initGnralInfo = {
  id: crypto.randomUUID(),
  fullName: "Marcos Curbeco",
  requestedPosit: "Front-End Developer",
  email: "consolewizard@gmail.com",
  number: "404 500 2000",
  location: "San Francisco, CA",
};

const initEducation = [
  {
    id: crypto.randomUUID(),
    schoolName: "Stack Overflow University",
    title: "B.Sc. in Copy & Paste Engineering",
    location: "Online",
    fromDate: "08-15-2018",
    toDate: "05-24-2022",
  },
  {
    id: crypto.randomUUID(),
    schoolName: "The Odin Project",
    title: "Full Stack JavaScript",
    location: "Remote",
    fromDate: "01-05-2023",
    toDate: "Present",
  },
  {
    id: crypto.randomUUID(),
    schoolName: "YouTube Academy",
    title: "Advanced Debugging at 2AM",
    location: "Bedroom Office",
    fromDate: "09-10-2022",
    toDate: "06-12-2023",
  },
];

const initWorkExp = [
  {
    id: crypto.randomUUID(),
    companyName: "Google Searches Inc.",
    positionTitle: "Junior Front-End Developer",
    location: "Remote",
    mainResp:
      "Responsible for building responsive user interfaces, fixing mysterious bugs that disappeared when the senior developer arrived, and searching error messages that somehow always led back to a 2012 Stack Overflow post. Improved application performance by removing 47 unnecessary console.log statements.",
    fromDate: "02-05-2022",
    toDate: "02-05-2024",
  },
  {
    id: crypto.randomUUID(),
    companyName: "Freelance & Crying LLC",
    positionTitle: "React Developer",
    location: "Mom's House",
    mainResp:
      "Developed modern React applications while pretending to understand webpack configuration files. Successfully centered divs after multiple emotional breakdowns and renamed project files from final.js to final-final-REAL-v2.js with industry-level consistency.",
    fromDate: "03-01-2024",
    toDate: "Present",
  },
  {
    id: crypto.randomUUID(),
    companyName: "BugFactory Studios",
    positionTitle: "JavaScript Engineer",
    location: "Austin, TX",
    mainResp:
      "Worked closely with developers to create new features, introduce accidental bugs into production, and confidently say 'it works on my machine' during meetings. Specialized in spending six hours debugging problems caused by a missing comma.",
    fromDate: "06-10-2021",
    toDate: "12-20-2021",
  },
];

function App() {
  const [generalInfo, setGeneralInfo] = useState(() => {
    const savedInfo = localStorage.getItem("generalInfo");
    return savedInfo ? JSON.parse(savedInfo) : initGnralInfo;
  });
  const [education, setEducation] = useState(() => {
    const savedInfo = localStorage.getItem("education");
    return savedInfo ? JSON.parse(savedInfo) : initEducation;
  });
  const [workExp, setWorkExp] = useState(() => {
    const savedInfo = localStorage.getItem("workExp");
    return savedInfo ? JSON.parse(savedInfo) : initWorkExp;
  });

  useEffect(() => {
    localStorage.setItem("generalInfo", JSON.stringify(generalInfo));
    localStorage.setItem("education", JSON.stringify(education));
    localStorage.setItem("workExp", JSON.stringify(workExp));
  }, [generalInfo, education, workExp]);

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
