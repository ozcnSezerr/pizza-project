import img1 from "../../images/iteration-2-images/icons/1.svg";
import img2 from "../../images/iteration-2-images/icons/2.svg";
import img3 from "../../images/iteration-2-images/icons/3.svg";
import img4 from "../../images/iteration-2-images/icons/4.svg";
import img5 from "../../images/iteration-2-images/icons/5.svg";
import img6 from "../../images/iteration-2-images/icons/6.svg";
import styled from "styled-components";

const Navigation = styled.nav`
  background-color: white;
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  @media (max-width: 500px) {
    display: grid;
    column-gap: 4rem;
    grid-template-columns: auto auto;
  }
`;
const Element = styled.li`
  background-color: white;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  width: fit-content;
`;

const Text = styled.span`
  background-color: white;
  font-weight: 600;
  text-align: center;
`;

const Image = styled.img`
  transform: scale(0.9);
`;

export default function NavigationBar() {
  return (
    <Navigation className="py-3">
      <Element>
        <Image src={img1} alt="" /> <Text>YENİ! Kore</Text>
      </Element>
      <Element>
        <Image src={img2} alt="" /> <Text>Pizza</Text>
      </Element>
      <Element>
        <Image src={img3} alt="" /> <Text>Hamburger</Text>
      </Element>
      <Element>
        <Image src={img4} alt="" /> <Text>Kızartmalar</Text>
      </Element>
      <Element>
        <Image src={img5} alt="" /> <Text>Fast Food</Text>
      </Element>
      <Element>
        <Image src={img6} alt="" /> <Text>Gazlı İçecekler</Text>
      </Element>
    </Navigation>
  );
}
