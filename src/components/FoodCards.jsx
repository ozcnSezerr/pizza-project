import styled from "styled-components";
import img1 from "../../images/iteration-2-images/pictures/food-1.png";
import img2 from "../../images/iteration-2-images/pictures/food-2.png";
import img3 from "../../images/iteration-2-images/pictures/food-3.png";

const Container = styled.div`
  display: flex;
  margin: 1.8rem auto;
  margin-bottom: 4rem;
  justify-content: center;
  gap: 1.6rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Card = styled.div`
  box-shadow: 0 2px 4px #dcdbdbff;
  display: flex;
  width: 340px;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  gap: 0.5rem;
`;
const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -0.6rem;
  align-items: center;
`;
const Image = styled.img`
  width: 280px;
`;

const CardName = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin-top: 0.6rem;
`;

export default function Cards() {
  return (
    <Container>
      <Card>
        <Image src={img1} />

        <CardName>Terminal Pizza</CardName>
        <CardPrice>
          <span
            style={{
              color: "gray",
              fontWeight: "bold",
            }}
          >
            4.9
          </span>
          <span
            style={{
              transform: "translateX(40px)",
              color: "gray",
              fontWeight: "bold",
            }}
          >
            (200)
          </span>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>60₺</span>
        </CardPrice>
      </Card>
      <Card>
        <Image src={img2} />

        <CardName>Position Absolute Acı Pizza</CardName>
        <CardPrice>
          <span
            style={{
              color: "gray",
              fontWeight: "bold",
            }}
          >
            4.9
          </span>
          <span
            style={{
              transform: "translateX(40px)",
              color: "gray",
              fontWeight: "bold",
            }}
          >
            (200)
          </span>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>60₺</span>
        </CardPrice>
      </Card>
      <Card>
        <Image src={img3} />

        <CardName>useEffect Tavuklu Burger</CardName>
        <CardPrice>
          <span
            style={{
              color: "gray",
              fontWeight: "bold",
            }}
          >
            4.9
          </span>
          <span
            style={{
              transform: "translateX(40px)",
              color: "gray",
              fontWeight: "bold",
            }}
          >
            (200)
          </span>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>60₺</span>
        </CardPrice>
      </Card>
    </Container>
  );
}
