import { Input, Label, FormGroup } from "reactstrap";

export default function CheckBoxs({ value, checked, onChange, id }) {
  return (
    <FormGroup check>
      <Input
        name="checkbox"
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={id} check>
        {value}
      </Label>
    </FormGroup>
  );
}
