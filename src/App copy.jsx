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

const generalInfo = {
  id: crypto.randomUUID(),
  fullName: "Marcos Curbeco",
  email: "curbecomarcos@gmail.com",
  number: "564 545 5444",
};

const education = [
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

const workExperience = [
  {
    id: crypto.randomUUID(),
    companyName: "Google",
    position: "Front-End",
    mainResp: "- Create better apps",
    fromDate: "25/08/2002",
    toDate: "25/08/2009",
  },
  {
    id: crypto.randomUUID(),
    companyName: "Facebook",
    position: "Back-End",
    mainResp: "- Create stronger apps",
    fromDate: "18/07/2005",
    toDate: "18/07/2009",
  },
];

export function AppTest() {
  return (
    <>
      {/* <SideForms
        generalInfo={generalInfo}
        education={education}
        workExp={workExperience}
      ></SideForms> */}
      <Resume
        generalInfo={generalInfo}
        education={education}
        workExp={workExperience}
      ></Resume>
    </>
  );
}

// function SideForms({ generalInfo, education, workExp }) {}

function Resume({ generalInfo, education, workExp }) {
  return (
    <>
      <h1>My Resume</h1>
      <h2>{generalInfo.fullName}</h2>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.number}</p>
      <InfoSection entries={education} sectionType={"education"}></InfoSection>
      <InfoSection entries={workExp} sectionType={"work"}></InfoSection>
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
            <Card>
              <p>School Name: {entry.schoolName}</p>
              <p>Title: {entry.title}</p>
              <p>Study Date: {entry.studyDate}</p>
            </Card>
          ))}

        {sectionType === "work" &&
          entries.map((entry) => (
            <Card>
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
