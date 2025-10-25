import {
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContent from "./FormContent";
import CheckBoxs from "./CheckBoxs";
import CounterBox from "./CounterBox";
import RadioButtons from "./RadioButtons";
import FormHeader from "./FormHeader";
import styled from "styled-components";
import axios from "axios";
const SelectBox = styled.select`
  padding: 0.5rem 1rem;
  padding-right: 3rem;
  border: none;
  border-radius: 8px;
  background-color: #f9f9f9;
  &:focus {
    box-shadow: 0 0 5px 3px rgba(253, 201, 19, 0.3);
    background-color: #fdc91333;
    // border-color: rgba(253, 201, 19, 1);
  }
  &:selected {
    background-color: #f9f9f9;
    border-color: rgba(253, 201, 19, 1);
  }
`;

const AlertStar = styled.span`
  color: red;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

const options = [
  "Pepperoni",
  "Sosis",
  "Jambon",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Zeytin",
  "Ananas",
  "Avokado",
];

const radio = ["S", "M", "L"];

export default function SiparisForm() {
  const [formData, setFormData] = useState({
    checkbox: [],
    radio: "",
    select: "",
    name: "",
    text: "",
  });
  const [errors, setErrors] = useState({
    checkbox: false,
    radio: false,
    select: false,
    name: false,
  });
  const [isValid, setIsValid] = useState(false);
  const [price, setPrice] = useState(85.5);
  const [addPrice, setAddPrice] = useState(0);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("API'ye GÖNDERİLEN DATA:", formData);

    const axiosConfig = {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    };
    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        formData,
        axiosConfig
      );
      console.log("APİ cevap", response.data);
      history.push("/success");
    } catch (error) {
      console.error("Bağlantı hatası", error);
    }
  };

  const handleChange = (e) => {
    const { checked, value, name, type } = e.target;
    if (type === "checkbox") {
      if (checked && formData.checkbox.length >= 10) return;
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...formData[name], value],
        });
        setAddPrice(addPrice + 5);
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        });
        setAddPrice(addPrice > 0 && addPrice - 5);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const newErrors = {};

    newErrors.name = formData.name.trim().length < 3;

    newErrors.checkbox = formData.checkbox.length < 4;

    newErrors.radio = formData.radio === "";

    newErrors.select = formData.select === "";

    setErrors(newErrors);

    setIsValid(
      newErrors && Object.values(newErrors).every((err) => err === false)
    );
  }, [formData]);

  useEffect(() => {
    console.log("State güncellendi:", isValid);
  }, [formData]);

  return (
    <div>
      <FormHeader />
      <FormContent />
      <div className="form-wrapper">
        <Form onSubmit={handleSubmit}>
          <div className="form-row">
            {/* Radio butonlar */}
            <div className="radio-container">
              <h3>
                Boyut Seç
                <AlertStar $visible={errors.radio}>*</AlertStar>
              </h3>
              <div className="radios">
                {radio.map((value, i) => (
                  <RadioButtons
                    key={value}
                    id={i * 4}
                    onChange={handleChange}
                    value={value}
                    checked={formData.radio === value}
                    errors={errors}
                  />
                ))}
              </div>
            </div>

            {/* Select box */}
            <div className="select-container">
              <FormGroup>
                <Label for="exampleSelect">
                  <h3>
                    Hamur Seç
                    <AlertStar $visible={errors.select}>*</AlertStar>
                  </h3>
                </Label>
                <SelectBox
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={formData.select}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    ~Hamur tipi seçin~
                  </option>
                  <option value="kalin">Kalın</option>
                  <option value="orta">Orta</option>
                  <option value="ince">İnce</option>
                </SelectBox>
              </FormGroup>
            </div>
          </div>
          <div className="ingredients-section">
            <h3>
              Ek Malzemeler <AlertStar $visible={errors.checkbox}>*</AlertStar>
            </h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="py-3 my-4 check-box-container">
              {options.map((value, i) => {
                return (
                  <CheckBoxs
                    id={i * 2}
                    value={value}
                    checked={formData.checkbox.includes(value)}
                    onChange={handleChange}
                  />
                );
              })}
            </div>

            <FormGroup>
              <Label for="exampleName">
                <h4>İsminiz:</h4>
              </Label>
              <Input
                style={{
                  backgroundColor: "rgb(247, 247, 240, 1)",
                }}
                name="name"
                onChange={(e) => handleChange(e)}
                value={formData.name}
                invalid={errors.name}
              />
              {errors.name && (
                <FormFeedback>İsim girmek zorunludur</FormFeedback>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">
                <h3>Ek Malzemeler</h3>
              </Label>
              <Input
                id="exampleText"
                name="text"
                style={{
                  resize: "none",
                  backgroundColor: "rgb(247, 247, 240, 1)",
                }}
                onChange={(e) => handleChange(e)}
                value={formData.text}
                placeholder="Siparişine eklemek istediğin bir not var mı ..."
                type="textarea"
              />
            </FormGroup>
            <hr
              className="text-dark"
              style={{
                border: "none",
                borderTop: "2px solid #5c5c5cff",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            />
          </div>

          <CounterBox price={price} addPrice={addPrice} isDisable={isValid} />
        </Form>
      </div>
    </div>
  );
}
