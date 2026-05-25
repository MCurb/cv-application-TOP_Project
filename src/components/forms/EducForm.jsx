import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function EducForm({ onSubmit, isActive, inputsData, onChange, id }) {
  function onInputChange(e) {
    const { name, value } = e.target;
    onChange({ ...inputsData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(inputsData);
  }

  return (
    <form
      data-form-id={id}
      className={isActive ? "visible" : "hidden"}
      onSubmit={handleFormSubmit}
    >
      <fieldset>
        <legend>Education:</legend>
        <Input
          label={"School Name:"}
          placeholder={"MIT"}
          value={inputsData.schoolName}
          id={"input-sch-name"}
          name={"schoolName"}
          onChange={onInputChange}
          required
        ></Input>
        <Input
          label={"Title:"}
          placeholder={"Sofware Engineer"}
          value={inputsData.title}
          id={"input-title"}
          name={"title"}
          onChange={onInputChange}
          required
        ></Input>
        <Input
          label={"Study Date:"}
          value={inputsData.studyDate}
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
