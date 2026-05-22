import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function EducForm({ onFormSubmit, isActive, id }) {
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
    onFormSubmit(educationInputValues, e);
  }

  return (
    <form
      data-form-id={id}
      className={isActive ? "visible" : "hidden"}
      onSubmit={onSubmit}
    >
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
