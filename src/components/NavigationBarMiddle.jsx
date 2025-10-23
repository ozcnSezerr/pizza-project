import img1 from "../../images/iteration-2-images/icons/1.svg";
import img2 from "../../images/iteration-2-images/icons/2.svg";
import img3 from "../../images/iteration-2-images/icons/3.svg";
import img4 from "../../images/iteration-2-images/icons/4.svg";
import img5 from "../../images/iteration-2-images/icons/5.svg";
import img6 from "../../images/iteration-2-images/icons/6.svg";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.8rem;
`;
const Element = styled.li`
  border-radius: 34px;
  box-shadow: 1px 1px 0 1px rgba(222, 222, 222, 1);
  padding: 0.8rem 1.2rem;
  background-color: white;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Text = styled.span`
  font-weight: 600;
  background-color: white;
  font-weigth: bold;
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
