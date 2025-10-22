import styled from "styled-components";
import logo from "../assets/logo.svg";

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  width: 100%;
  height: 180px;
  background-color: #ce2829;
  margin-bottom: 2.5rem;
`;

const Logo = styled.img`
  width: 360px;
  height: 46px;
`;

const HeaderText = styled.p`
  position: absolute;
  font-weight: 500;
  left: 35%;
  top: 136px;
  text-align: center;
  color: white;
`;

export default function FormHeader() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo" />
      <HeaderText>
        <span style={{ color: "#dedbdbff", fontWeight: "300" }}>Anasayfa</span>-
        Sipariş Oluştur
      </HeaderText>
    </HeaderWrapper>
  );
}
