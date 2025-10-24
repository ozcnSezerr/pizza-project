import styled from "styled-components";
import logo from "../assets/logo.svg";
import formbanner from "../../images/iteration-2-images/pictures/form-banner.png";

const Header = styled.div`
  // position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
  width: 100%;
  height: 100px;
  background-color: #ce2829;
`;
const Banner = styled.img`
  align-self: center;
  margin-top: -3rem;
  z-index: 0;
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
      <Header>
        <Logo src={logo} alt="Logo" />
      </Header>
      <Banner src={formbanner} />
    </Wrapper>
  );
}
