import React, { useState } from "react";

const price = 85.5;

function OrderSummary() {
  const [count, setCount] = useState(1);
  const [elections, setElections] = useState([]);
  const [totalPrice, setTotalPrice] = useState(price * count);

  // Sipariş adedini arttırır.
  const increment = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  // Sipariş adedini azaltır.
  const decrement = (event) => {
    event.preventDefault();
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  // Extra malzemeleri ekler ve çıkarır.
  const addElection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Checkbox işaretlenirse değeri "elections" array e ekler.
      setElections((prevElections) => [...prevElections, value]);
    } else {
      // Checkbox işareti kaldırılırsa, array'den çıkarır.
      setElections((prevElections) =>
        prevElections.filter((item) => item !== value)
      );
    }

    const selectedCount = elections.length + (checked ? 1 : -1);

    setErrors((prevErrors) => ({
      ...prevErrors,
      warning: selectedCount < 4 || selectedCount > 10,
    }));

    if (name === "note") {
      setErrors({ ...errors, note: value.length < 5 });
    }
  };

  // Sipariş hazır hale geldiğinde, "Sipariş ver" butonunuyla action tetiklenir.
  // Ekranda "Sipariş Verildi" alert olarak gösterir.
  const handleOrderCompleted = (event) => {
    event.preventDefault();
    alert("Sipariş Verildi");
  };

  return (
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
  );
}

export default OrderSummary;
