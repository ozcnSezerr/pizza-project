import styled from "styled-components";
import Image from "../../images/iteration-1-images/home-banner.png";
import image from "../assets/logo.svg";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 100vh;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ToFormButton = styled.button`
  width: 160px;
  border: none;
  font-weight: 700;
  background-color: #fdc913;
  border-radius: 23px;
  padding: 0.7rem;
`;
const Header = styled.h1`
  text-align: center;
  transform: scale(1.6);
  font-family: "Roboto Condensed", sans-serif;
  color: white;
`;
const Logo = styled.img`
  margin-top: 3rem;
  width: 360px;
  transform: scale(0.7);
`;

export default function MainPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <Logo src={image} />
      <Header>
        KOD ACIKTIRIR <br /> PİZZA, DOYURUR
      </Header>
      <ToFormButton onClick={handleClick}>ACIKTIM</ToFormButton>
    </Container>
  );
}
