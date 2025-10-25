import styled from "styled-components";
import logo from "../assets/logo.svg";
import formbanner from "../../images/iteration-2-images/pictures/form-banner.png";

const HeaderContainer = styled.div`
  // position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.5rem;
  width: 100%;
  height: 130px;
  background-color: #ce2829;
  gap: 1rem;
`;
const PizzaBanner = styled.img`
  align-self: center;
  margin-top: -3rem;
  z-index: 0;
  @media (max-width: 500px) {
    display: none;
  }
`;
const HeaderText = styled.p`
  display: none;
  color: white;
  margin-left: -220px;
  padding-bottom: 1rem;
  @media (max-width: 500px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: rgb(247, 247, 240, 1);
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2.5rem;
`;
const Logo = styled.img`
  width: 360px;
  height: 46px;
`;

export default function FormHeader() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo src={logo} alt="Logo" />
        <HeaderText>
          <span style={{ color: "#cfcfcfff", fontWeight: "500" }}>
            Anasayfa{" "}
          </span>
          - Sipariş Oluştur
        </HeaderText>
      </HeaderContainer>
      <PizzaBanner src={formbanner} />
    </Wrapper>
  );
}
