import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <header className="">
      <div className="header-content">
        <h1>Teknolojik Yemekler</h1>
        <div className="container-lg">
          <p>
            Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
