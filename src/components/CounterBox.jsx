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
  border: 1px solid #d9d9d9;
  width: 340px;
  display: flex;
  flex-direction: column;
`;

export default function CounterBox({ price, addPrice, isDisable }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContainer>
        <CounterButton
          className="border rounded-start"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </CounterButton>
        <CounterDisplay>{count}</CounterDisplay>
        <CounterButton
          className="border rounded-end"
          type="button"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          -
        </CounterButton>
      </CounterContainer>
      <SubmitContainer className="pt-5 rounded">
        <h5 className="ms-5 pb-3" style={{ fontWeight: "600" }}>
          Sipariş Toplamı
        </h5>
        <p className="ms-5" style={{ color: "#5F5F5F", fontWeight: "600" }}>
          Seçimler{" "}
          <span style={{ marginLeft: "7.4rem" }}>{addPrice * count}.00₺</span>
        </p>
        <p
          className="ms-5 mb-5"
          style={{ color: "#CE2829", fontWeight: "600" }}
        >
          Toplam{" "}
          <span style={{ marginLeft: "8rem" }}>
            {addPrice * count + price * count}₺
          </span>
        </p>
        <OrderButton
          disabled={!(isDisable && count > 0)}
          type="submit"
          className="py-3 border rounded"
        >
          Sipariş Ver
        </OrderButton>
      </SubmitContainer>
    </>
  );
}
