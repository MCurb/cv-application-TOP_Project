import { Form } from "../ui/Form";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { DateFormSection } from "./DateFormSection";

export function ExperienceForm({ onSubmit, inputsData, onChange }) {
  function onInputChange(e) {
    const { name, value } = e.target;
    onChange({ ...inputsData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(inputsData);
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        label={"Company Name:"}
        placeholder={"Google"}
        id={"input-company-name"}
        name={"companyName"}
        value={inputsData.companyName}
        onChange={onInputChange}
        required
      ></Input>
      <Input
        label={"Position Title:"}
        placeholder={"Front-End Developer"}
        id={"input-position-title"}
        name={"positionTitle"}
        value={inputsData.positionTitle}
        onChange={onInputChange}
        required
      ></Input>
      <Input
        label={"Work Location"}
        placeholder={"Miami FL"}
        id={"input-work-location"}
        name={"location"}
        value={inputsData.location}
        onChange={onInputChange}
      ></Input>
      <Textarea
        label={"Main Responsibilities:"}
        id={"txtarea-respon"}
        name={"mainResp"}
        value={inputsData.mainResp}
        onChange={onInputChange}
      />
      <DateFormSection legendText={'Date you worked on'}>
        <Input
          label={"From:"}
          id={"input-from-date"}
          name={"fromDate"}
          value={inputsData.fromDate}
          onChange={onInputChange}
          type="date"
        ></Input>
        <Input
          label={"To:"}
          id={"input-to-date"}
          name={"toDate"}
          value={inputsData.toDate}
          onChange={onInputChange}
          type="date"
        ></Input>
      </DateFormSection>
    </Form>
  );
}
