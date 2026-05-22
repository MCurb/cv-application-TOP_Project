import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";

export function PracticalExpForm({ onFormSubmit, isActive, id }) {
  const [practExpInputValues, setPractExpInputValues] = useState({
    companyName: "",
    positionTitle: "",
    mainResp: "",
    fromDate: "",
    toDate: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setPractExpInputValues({ ...practExpInputValues, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    onFormSubmit(practExpInputValues, e);
  }

  return (
    <form
      data-form-id={id}
      className={isActive ? "visible" : "hidden"}
      onSubmit={onSubmit}
    >
      <fieldset>
        <legend>Practical Experience:</legend>
        <Input
          label={"Company Name:"}
          placeholder={"Google"}
          id={"input-company-name"}
          name={"companyName"}
          onChange={onChange}
          required
        ></Input>
        <Input
          label={"Position Title:"}
          placeholder={"Front-End Developer"}
          id={"input-position-title"}
          name={"positionTitle"}
          onChange={onChange}
          required
        ></Input>
        <Textarea
          label={"Main Responsibilities:"}
          id={"txtarea-respon"}
          name={"mainResp"}
          onChange={onChange}
        />
        <fieldset>
          <legend>Date you worked on:</legend>
          <Input
            label={"From:"}
            id={"input-from-date"}
            name={"fromDate"}
            onChange={onChange}
            type="date"
          ></Input>
          <Input
            label={"To:"}
            id={"input-to-date"}
            name={"toDate"}
            onChange={onChange}
            type="date"
          ></Input>
        </fieldset>
      </fieldset>
      <div>
        <Button type="submit" text={"Submit"}></Button>
        <Button text={"Clear"}></Button>
      </div>
    </form>
  );
}
