import { Form } from "../ui/Form";
import { Input } from "../ui/Input";

export function GralForm({ onSubmit, inputsData, onChange }) {
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
        label={"Full Name"}
        placeholder={"Marcos Curbeco"}
        id={"input-name"}
        name={"fullName"}
        value={inputsData.fullName}
        onChange={onInputChange}
        required
      ></Input>
      <Input
        label={"Requested Position"}
        placeholder={"Sofware Engineer"}
        id={"input-requested-position"}
        name={"requestedPosit"}
        value={inputsData.requestedPosit}
        onChange={onInputChange}
        required
      ></Input>
      <Input
        label={"Email"}
        placeholder={"youremail@gmail.com"}
        id={"input-email"}
        name={"email"}
        value={inputsData.email}
        onChange={onInputChange}
        type="email"
        required={inputsData.number === "" && true}
      ></Input>
      <Input
        label={"Phone Number"}
        placeholder={"548 654 1526"}
        id={"input-number"}
        name={"number"}
        value={inputsData.number}
        onChange={onInputChange}
        type="tel"
        required={inputsData.email === "" && true}
      ></Input>
      <Input
        label={"Location"}
        placeholder={"SF, CA"}
        id={"input-location"}
        name={"location"}
        value={inputsData.location}
        onChange={onInputChange}
      ></Input>
    </Form>
  );
}
