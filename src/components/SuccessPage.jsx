import image from "../assets/logo.svg";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: #ce2829;
`;

const SuccessMessage = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2.4);
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.6px;
  line-height: 1.6rem;
  font-family: "Roboto Condensed", sans-serif;
`;

const Image = styled.img`
  margin-top: 4rem;
  transform: scale(0.6);
`;
export default function SuccessPage() {
  return (
    <Container>
      <Image src={image} alt="teknolojik yemekler" />
      <SuccessMessage>
        tebrikler! <br /> siparişiniz alındı!
      </SuccessMessage>
    </Container>
  );
}
