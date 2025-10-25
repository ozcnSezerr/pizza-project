import styled from "styled-components";

const SmallNav = styled.p`
  font-weight: 500;
  color: #ce2829;
  @media (max-width: 500px) {
    display: none;
  }
`;

export default function () {
  return (
    <div style={{ width: "100%", backgroundColor: "rgb(247, 247, 240, 1)" }}>
      <div className="form-content">
        <SmallNav>
          <span style={{ color: "#5F5F5F", fontWeight: "500" }}>Anasayfa </span>
          - Sipariş Oluştur
        </SmallNav>
        <h2>Position Absolute Acı Pizza</h2>
        <div className="form-prices">
          <span
            style={{
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "28px",
              lineHeight: "37.47px",
            }}
          >
            85.50₺
          </span>
          <span style={{ paddingLeft: "9rem" }}>4.9</span>
          <span>(200)</span>
        </div>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra olarak odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}
