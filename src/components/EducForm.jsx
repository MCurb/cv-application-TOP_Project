import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function EducForm({ onFormSubmit }) {
  const [educationInputValues, setEducationInputValues] = useState({
    schoolName: "",
    title: "",
    studyDate: "",
  });

  function onInputChange(e) {
    const { name, value } = e.target;
    setEducationInputValues({ ...educationInputValues, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    onFormSubmit(educationInputValues);
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Education:</legend>
        <Input
          label={"School Name:"}
          placeholder={"MIT"}
          id={"input-sch-name"}
          name={"schoolName"}
          onChange={onInputChange}
          required
        ></Input>
        <Input
          label={"Title:"}
          placeholder={"Sofware Engineer"}
          id={"input-title"}
          name={"title"}
          onChange={onInputChange}
          required
        ></Input>
        <Input
          label={"Study Date:"}
          id={"input-study-date"}
          name={"studyDate"}
          onChange={onInputChange}
          type="date"
        ></Input>
      </fieldset>
      <div>
        <Button type="submit" text={"Submit"}></Button>
        <Button text={"Clear"}></Button>
      </div>
    </form>
  );
}
