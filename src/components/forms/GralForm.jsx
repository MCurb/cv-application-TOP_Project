import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function GralForm({ onSubmit, isActive, inputsData, onChange, id }) {
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
        <legend>General Information:</legend>
        <Input
          label={"Full Name:"}
          placeholder={"Marcos Curbeco"}
          id={"input-name"}
          name={"fullName"}
          value={inputsData.fullName}
          onChange={onInputChange}
          required
        ></Input>
        <Input
          label={"Email:"}
          placeholder={"youremail@gmail.com"}
          id={"input-email"}
          name={"email"}
          value={inputsData.email}
          onChange={onInputChange}
          type="email"
          required={inputsData.number === "" && true}
        ></Input>
        <Input
          label={"Phone Number:"}
          placeholder={"548 654 1526"}
          id={"input-number"}
          name={"number"}
          value={inputsData.number}
          onChange={onInputChange}
          type="number"
          required={inputsData.email === "" && true}
        ></Input>
      </fieldset>
      <div>
        <Button type="submit" text={"Submit"}></Button>
        <Button text={"Clear"}></Button>
      </div>
    </form>
  );
}
