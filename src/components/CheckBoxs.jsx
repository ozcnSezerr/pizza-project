import { Input, Label, FormGroup } from "reactstrap";

export default function CheckBoxs({ option, isChecked, onChange, id }) {
  return (
    <FormGroup check>
      <Input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(option)}
      />
      <Label htmlFor={id} check>
        {option}
      </Label>
    </FormGroup>
  );
}
