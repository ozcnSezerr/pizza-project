import { FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

export default function RadioButtons({ onChange, value, checked }) {
  return (
    <FormGroup check>
      <Input
        name="radio"
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Label check>{value}</Label>
    </FormGroup>
  );
}
