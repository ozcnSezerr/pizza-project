import slider1 from "../../images/iteration-2-images/cta/kart-1.png";
import slider2 from "../../images/iteration-2-images/cta/kart-2.png";
import slider3 from "../../images/iteration-2-images/cta/kart-3.png";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 1rem;
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  transform: scale(0.85);
`;
const Slider = styled.div`
  position: relative;
`;

const Image = styled.img`
  border-radius: 1rem;
`;
const RigthColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RightContent = styled.p`
  position: absolute;
  left: 16%;
  top: 20%;
  font-weight: 600;
  transform: scale(2);
`;

const LeftContent = styled.p`
  font-family: "Quattrocento", serif;
  position: absolute;
  left: 12%;
  top: 12%;
  font-weight: 600;
  line-height: 4rem;
  font-size: 4rem;
  transform: scale(1.2);
`;

const Button = styled.button`
  text-align: center;
  color: #ce2829;
  text-transform: upperCase;
  background-color: #ffffff;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 37px;
  width: 150px;
  padding: 1rem;
  top: 58%;
  left: 8%;
  position: absolute;
  cursor: pointer;
`;

export default function SliderCards({ onClick }) {
  return (
    <Container>
      <Slider>
        <Image src={slider1} style={{ borderLeft: "2px solid red" }} alt="1" />
        <LeftContent style={{ color: "white" }}>
          Özel <br /> Lezzetus <br />
          <span
            style={{
              display: "inline-block",
              paddingTop: "0",
              fontWeight: "400",
              fontSize: "1.2rem",
              lineHeight: "1rem",
              transform: "translateY(-1rem)",
            }}
          >
            Position:Absolute Acı Burger
          </span>
        </LeftContent>
        <Button onClick={onClick} style={{ transform: "translateY(-1.4rem)" }}>
          Sipariş Ver
        </Button>
      </Slider>
      <RigthColumn>
        <Slider>
          <Image src={slider2} alt="2" />
          <Button onClick={onClick}>Sipariş Ver </Button>
          <RightContent style={{ color: "white" }}>
            Hackathlon <br /> Burger Menü
          </RightContent>
        </Slider>
        <Slider>
          <Image src={slider3} alt="3" />
          <Button onClick={onClick}>Sipariş Ver </Button>
          <RightContent style={{ color: "black" }}>
            <span style={{ color: "#ce2829" }}>Çoooook</span> hızlı <br /> npm
            gibi kurye
          </RightContent>
        </Slider>
      </RigthColumn>
    </Container>
  );
}
