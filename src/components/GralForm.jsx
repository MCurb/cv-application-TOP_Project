import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function GralForm({ onFormSubmit, isActive, id }) {
  const [gralInfoInputValues, setGralInfoInputValues] = useState({
    fullName: "",
    email: "",
    number: "",
  });

  function onInputChange(e) {
    const { name, value } = e.target;
    setGralInfoInputValues({ ...gralInfoInputValues, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    onFormSubmit(gralInfoInputValues, e);
  }

  return (
    <form data-form-id={id} className={isActive ? "visible" : "hidden"} onSubmit={onSubmit}>
      <fieldset>
        <legend>General Information:</legend>
        <Input
          label={"Full Name:"}
          placeholder={"Marcos Curbeco"}
          id={"input-name"}
          name={"fullName"}
          onChange={onInputChange}
          required
        ></Input>
        <Input
          label={"Email:"}
          placeholder={"youremail@gmail.com"}
          id={"input-email"}
          name={"email"}
          onChange={onInputChange}
          type="email"
          required={gralInfoInputValues.number === "" && true}
        ></Input>
        <Input
          label={"Phone Number:"}
          placeholder={"548 654 1526"}
          id={"input-number"}
          name={"number"}
          onChange={onInputChange}
          type="number"
          required={gralInfoInputValues.email === "" && true}
        ></Input>
      </fieldset>
      <div>
        <Button type="submit" text={"Submit"}></Button>
        <Button text={"Clear"}></Button>
      </div>
    </form>
  );
}
