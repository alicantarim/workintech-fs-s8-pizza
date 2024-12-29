import React, { useState } from "react";

function QuantitySelection() {
  const [count, setCount] = useState(1);

  const increment = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  // Sipariş adedini azaltır.
  const decrement = (event) => {
    event.preventDefault();
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  return (
    <div className="quantity-select button-div">
      <button className="decrement button" onClick={decrement}>
        -
      </button>
      <div className="counter">{count}</div>
      <button className="increment button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default QuantitySelection;
