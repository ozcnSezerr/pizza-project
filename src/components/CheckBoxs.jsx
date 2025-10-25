import { Label, FormGroup } from "reactstrap";
import styled from "styled-components";

const FormGrup = styled(FormGroup)`
  display: flex;
  // border: 1px solid black;
  padding-left: 0;
  text-align: center;
  gap: 0.4rem;
  margin: auto 0;
`;

const AddLabel = styled(Label)`
  font-weight: bold;
  color: #5f5f5f;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  appearance: none;
  // border: 1px solid;
  width: 2.4rem;
  height: 2.4rem;
  background-color: rgb(247, 247, 240, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  &::before {
    content: "\uF00C";
    font-family: "Font Awesome 7 Free";
    font-weight: 900;
    z-index: 1;
    display: none;
  }
  &:checked {
    background-color: #fdc913;
  }

  &:checked::before {
    display: block;
  }
`;

export default function CheckBoxs({ value, checked, onChange, id }) {
  return (
    <FormGrup check>
      <Input
        name="checkbox"
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <AddLabel htmlFor={id} check>
        {value}
      </AddLabel>
    </FormGrup>
  );
}
