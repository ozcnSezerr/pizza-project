import styled from "styled-components";
import Image from "../../images/iteration-1-images/home-banner.png";
import image from "../assets/logo.svg";
import { useHistory } from "react-router-dom";
import Navigation from "./NavigationBar";
import NavigationMiddle from "./NavigationBarMiddle";
import SliderCards from "./SliderCards";
import Cards from "./FoodCards";
import Footer from "./Footer";
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
  transform: scale(1.5);
  font-family: "Roboto Condensed", sans-serif;
  color: white;
`;
const Logo = styled.img`
  margin-top: 3rem;
  width: 360px;
  transform: scale(0.7);
`;

const SubHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;
const FirstSubHeader = styled.p`
  font-family: "satisfy";
  font-size: 2rem;
  color: #ce2829;
  margin-bottom: 0;
`;
const SecondSubHeader = styled.p`
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    width: 340px;
  }
`;

export default function MainPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/form");
  };

  return (
    <>
      <Container>
        <Logo src={image} />
        <Header>
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </Header>
        <ToFormButton data-testid="order-btn" onClick={handleClick}>
          ACIKTIM
        </ToFormButton>
      </Container>
      <Navigation />
      <SliderCards onClick={handleClick} />
      <SubHeaderContainer>
        <FirstSubHeader>en çopk paketlenen menüler</FirstSubHeader>
        <SecondSubHeader>Acıktıran Kodlara Doyuran Lezzetler</SecondSubHeader>
      </SubHeaderContainer>
      <NavigationMiddle />
      <Cards />
      <Footer />
    </>
  );
}
