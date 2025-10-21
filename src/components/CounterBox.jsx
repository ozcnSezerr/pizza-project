import { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

// Ana kapsayıcı
const CounterContainer = styled.div`
  width: 180px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

// Ortak buton stili
const CounterButton = styled.button`
  font-weight: bold;
  border: none;
  background-color: #fdc913;
  width: 60px;
  height: 60px;
  cursor: pointer;

  &:hover {
    background-color: #fad231ff;
  }

  &:active {
    background-color: #f9d159ff;
  }
`;

// Sayı kısmı
const CounterDisplay = styled.span`
  font-weight: bold;
  border: 1px solid #bebebe;
  background-color: #eae9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-left: none;
  border-right: none;
`;
const OrderButton = styled.button`
  background-color: #fdc913;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #e0b00d;
  }
`;
const SubmitContainer = styled.div`
  font
  border: 1px solid #d9d9d9;
  width: 340px;
  display: flex;
  flex-direction: column;
`;

export default function CounterBox() {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const handleClick = () => {
    history.push("/success");
  };

  return (
    <>
      <CounterContainer>
        <CounterButton
          className="border rounded-start"
          onClick={() => setCount(count + 1)}
        >
          +
        </CounterButton>
        <CounterDisplay>{count}</CounterDisplay>
        <CounterButton
          className="border rounded-end"
          onClick={() => setCount(count - 1)}
        >
          -
        </CounterButton>
      </CounterContainer>
      <SubmitContainer className="pt-5 rounded">
        <h5 className="ms-5 pb-3" style={{ fontWeight: "600" }}>
          Sipariş Toplamı
        </h5>
        <p className="ms-5" style={{ color: "#5F5F5F", fontWeight: "600" }}>
          Seçimler <span style={{ marginLeft: "7.4rem" }}>25.00₺</span>
        </p>
        <p
          className="ms-5 mb-5"
          style={{ color: "#CE2829", fontWeight: "600" }}
        >
          Toplam <span style={{ marginLeft: "8rem" }}>110.50₺</span>
        </p>
        <OrderButton
          onClick={handleClick}
          type="submit"
          className="py-3 border rounded"
        >
          Sipariş Ver
        </OrderButton>
      </SubmitContainer>
    </>
  );
}
