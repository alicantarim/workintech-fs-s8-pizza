import React, { useState } from "react";

const price = 85.5;

function QuantitySelection({ elections }) {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price * count);

  const increment = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  // Sipariş adedini azaltır.
  const decrement = (event) => {
    event.preventDefault();
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  // Sipariş hazır hale geldiğinde, "Sipariş ver" butonunuyla action tetiklenir.
  // Ekranda "Sipariş Verildi" alert olarak gösterir.
  const handleOrderCompleted = (event) => {
    event.preventDefault();
    alert("Sipariş Verildi");
  };

  return (
    <div className="flex between container-lg">
      <div className="quantity-select button-div">
        <button className="decrement button" onClick={decrement}>
          -
        </button>
        <div className="counter">{count}</div>
        <button className="increment button" onClick={increment}>
          +
        </button>
      </div>
      {/* QUANTITY SELECTION END */}
      {/* ORDER SUMMARY START */}
      <div className="order-summary flex column margin-bottom">
        <h3 className="padding-s">Sipariş Toplamı</h3>
        <div className="summary-item-election flex between semi-bold padding-s">
          <span>Seçimler: </span>
          {/* Seçilen malzeleme adedi * 5TL ile ekrana yazar. */}
          <span>{elections.length * 5} TL</span>
        </div>
        <div className="summary-item-total">
          <div className="flex between margin-button semi-bold padding-s color-red">
            <span>Toplam: </span>
            <span>{totalPrice * count + elections.length * 5 * count} TL</span>
          </div>
        </div>
        <button
          className="button semi-bold padding-s"
          onClick={handleOrderCompleted}
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

export default QuantitySelection;
