import { Form } from "../ui/Form";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

export function ExperienceForm({ onSubmit, isActive, inputsData, onChange }) {
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
      <Textarea
        label={"Main Responsibilities:"}
        id={"txtarea-respon"}
        name={"mainResp"}
        value={inputsData.mainResp}
        onChange={onInputChange}
      />
      <fieldset>
        <legend>Date you worked on:</legend>
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
      </fieldset>
    </Form>
  );
}
