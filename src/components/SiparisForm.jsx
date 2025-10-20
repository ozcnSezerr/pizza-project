import { Form, FormGroup, Input, Label, Col, Row } from "reactstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContent from "./FormContent";
import CheckBoxs from "./CheckBoxs";
import CounterBox from "./CounterBox";

const options = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
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

export default function SiparisForm() {
  const [selected, setSelected] = useState([]);

  const handleChange = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div>
      <FormContent />
      <div className="form-wrapper">
        <Form>
          <div className="form-row">
            {/* Radio butonlar */}
            <div className="radio-container">
              <h3>Boyut Seç</h3>
              <FormGroup check>
                <Input name="radio" type="radio" /> <Label check>Küçük</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio" type="radio" /> <Label check>Orta</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio" type="radio" /> <Label check>Büyük</Label>
              </FormGroup>
            </div>

            {/* Select box */}
            <div className="select-container">
              <FormGroup>
                <Label for="exampleSelect">
                  <h3>Hamur Seç</h3>
                </Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option value="" disabled>
                    Hamur tipi seçin
                  </option>
                  <option>Kalın</option>
                  <option>Orta</option>
                  <option>İnce</option>
                </Input>
              </FormGroup>
            </div>
          </div>
          <div className="ingredients-section">
            <h3>Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="p-3 check-box-container">
              <Row className="gy-3">
                {options.map((option, i) => (
                  <Col sm="4" key={option} className="ps-0">
                    <CheckBoxs
                      id={i * 2}
                      option={option}
                      isChecked={selected.includes(option)}
                      onChange={handleChange}
                    />
                  </Col>
                ))}
              </Row>
            </div>

            <FormGroup>
              <Label for="exampleText">
                <h3>Ek Malzemeler</h3>
              </Label>
              <Input
                id="exampleText"
                name="text"
                style={{ resize: "none" }}
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
        </Form>
      </div>
      <div className="submit-section">
        <CounterBox />
      </div>
    </div>
  );
}
