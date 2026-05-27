import { Form } from "../ui/Form";
import { Input } from "../ui/Input";
import { DateFormSection } from "./DateFormSection";

export function EducForm({ onSubmit, isActive, inputsData, onChange }) {
  function onInputChange(e) {
    const { name, value } = e.target;
    onChange({ ...inputsData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(inputsData);
  }

  return (
    <Form isActive={isActive} onSubmit={handleFormSubmit}>
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
        label={"School Location"}
        placeholder={"Louisville KY"}
        id={"input-school-location"}
        name={"location"}
        value={inputsData.location}
        onChange={onInputChange}
      ></Input>
      <DateFormSection legendText={'Date you studied on'}>
        <Input
          label={"From:"}
          id={"input-study-from-date"}
          name={"fromDate"}
          value={inputsData.fromDate}
          onChange={onInputChange}
          type="date"
        ></Input>
        <Input
          label={"To:"}
          id={"input-study-to-date"}
          name={"toDate"}
          value={inputsData.toDate}
          onChange={onInputChange}
          type="date"
        ></Input>
      </DateFormSection>
    </Form>
  );
}
