import { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 532px;
  width: 100%;
  @media(max-width:500px){
  display: grid;
  margin: 0;
  padding: 0;
  grid-teplate-rows: auto auto;
  grid-teplate-columns: auto auto;
  row-gap: 2rem;
  margin-bottom: 2rem;
  }
}
`;

const CounterContainer = styled.div`
  width: 180px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin: 0 auto;
  @media (max-width: 500px) {
    width: 210px;
  }
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
  @media (max-width: 500px) {
    width: 70px;
  }
`;

// Sayı kısmı
const CounterDisplay = styled.span`
  font-weight: bold;
  border: 0.8px solid #bebebe;
  background-color: #ebebebff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-left: none;
  border-right: none;
  @media (max-width: 500px) {
    width: 70px;
  }
`;
const OrderButton = styled.button`
  background-color: #fdc913;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    background-color: #e0b00d;
  }
  display: ${(props) => (props.show === "web" ? "block" : "none")};

  @media (max-width: 500px) {
    display: ${(props) => (props.show === "mobil" ? "block" : "none")};
    grid-column: 2/3;
    grid-row: 2;
  }
`;
const SubmitContainer = styled.div`
  background-color: rgb(247, 247, 240, 1);
  border: 1px solid #d9d9d9;
  width: 340px;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    grid-column: 1/3;
    grid-row: 1;
  }
`;

export default function CounterBox({ price, addPrice, isDisable }) {
  const [count, setCount] = useState(0);

  return (
    <MainContainer>
      <CounterContainer>
        <CounterButton
          data-testid="count-plus"
          className="border rounded-start"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </CounterButton>
        <CounterDisplay data-testid="count-display">{count}</CounterDisplay>
        <CounterButton
          data-testid="count-minus"
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
          show="web"
          disabled={!(isDisable && count > 0)}
          type="submit"
          className="py-3 border rounded web"
        >
          Sipariş Ver
        </OrderButton>
      </SubmitContainer>
      <OrderButton
        show="mobil"
        disabled={!(isDisable && count > 0)}
        type="submit"
        className="py-3 border rounded mobil"
      >
        Sipariş Ver
      </OrderButton>
    </MainContainer>
  );
}
