import { FormGroup, Label } from "reactstrap";
import styled from "styled-components";

const FormGrup = styled(FormGroup)`
  display: flex;
  // border: 1px solid black;
  padding-left: 0;
  text-align: center;
  margin: auto 0;
`;

const AddLabel = styled(Label)`
  display: flex;
  font-weight: bold;
  // margin-left: -100px;
  color: #5f5f5f;
  align-items: center;
`;

const Input = styled.input`
  appearance: none;
  width: 2.4rem;
  height: 2.4rem;
  background-color: rgb(247, 247, 240, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  &::before {
    content: "${(prop) => prop.value}";
    font-family: "Font Awesome 7 Free";
    font-weight: 800;
    color: gray;
  }
  &:checked {
    background-color: #feecc6ff;
  }

  &:checked::before {
    display: block;
  }
`;

export default function RadioButtons({ onChange, value, checked, id }) {
  return (
    <FormGrup check>
      <Input
        id={id}
        name="radio"
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {/* <AddLabel htmlFor={id} check>
        {value}
      </AddLabel> */}
    </FormGrup>
  );
}
