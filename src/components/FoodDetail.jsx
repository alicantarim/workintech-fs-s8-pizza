import React from "react";
import "../css/FoodDetail.css";

function FoodDetail() {
  return (
    <div className="container-lg extra">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="food-rank-price">
        <h3>85.50₺</h3>
        <p>4.8</p>
        <p>(200)</p>
      </div>
      <div className="food-description">
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}

export default FoodDetail;
