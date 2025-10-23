import styled from "styled-components";
import communImage1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import communImage2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import communImage3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import SocialImage1 from "../../images/iteration-2-images/footer/insta/li-0.png";
import SocialImage2 from "../../images/iteration-2-images/footer/insta/li-1.png";
import SocialImage3 from "../../images/iteration-2-images/footer/insta/li-2.png";
import SocialImage4 from "../../images/iteration-2-images/footer/insta/li-3.png";
import SocialImage5 from "../../images/iteration-2-images/footer/insta/li-4.png";
import SocialImage6 from "../../images/iteration-2-images/footer/insta/li-5.png";
import Logo from "../../images/iteration-2-images/footer/logo-footer.svg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 5.4rem;
  row-gap: 1.6rem;
  padding-top: 8rem;
  background-color: #1a1a1a;
`;
const Communication = styled.div`
  transform: translateY(-56px);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 0.4rem;
`;
const Menu = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;
const SocialMedia = styled.div`
  color: white;
`;

const Instagram = styled.div`
  display: grid;
  width: 360px;
  // justify-content: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 95px 95px 95px;
  gap: 1rem;
`;
const CopyRights = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 18%;
  margin-top: -0.8rem;
  padding-bottom: 0.8rem;
  color: white;
`;

export default function Footer() {
  return (
    <Container>
      <Communication>
        <img src={Logo} className="mb-5" alt="" />

        <p style={{ display: "flex" }}>
          <img
            src={communImage1}
            style={{ alignSelf: "flex-start" }}
            className="me-2"
            alt=""
          />
          341 Londonderry Road,
          <br />
          Istanbul Türkiye
        </p>
        <p>
          <img src={communImage2} className="me-2 mb-3" alt="" />
          aciktim@teknolojikyemekler.com
        </p>
        <p>
          <img src={communImage3} className="me-2 mb-3" alt="" />
          +90 216 123 45 67
        </p>
      </Communication>
      <Menu className="me-5">
        <h4 className="mb-5">Hot Menu</h4>
        <p>Terminal Pizza</p>
        <p>5 Kişilik Hackathlon Pizza</p>
        <p>useEffect Tavuklu Pizza</p>
        <p>Beyaz Console Frosty</p>
        <p>Testler Geçti Mutlu Burger</p>
        <p>Position Absolute Acı Burger</p>
      </Menu>
      <SocialMedia>
        <h4 className="mb-5">Instagram</h4>
        <Instagram>
          <img src={SocialImage1} alt="" />
          <img src={SocialImage2} alt="" />
          <img src={SocialImage3} alt="" />
          <img src={SocialImage4} alt="" />
          <img src={SocialImage5} alt="" />
          <img src={SocialImage6} alt="" />
        </Instagram>
      </SocialMedia>
      <hr style={{ border: "1px solid #FFF", width: "100%" }} />
      <CopyRights style={{ width: "100%" }}>
        <p>&copy; 2023 Teknolojik Yemekler. </p>
        <i class="fa-brands fa-twitter"></i>
      </CopyRights>
    </Container>
  );
}
