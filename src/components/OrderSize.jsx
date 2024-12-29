import React from "react";

function OrderSize() {
  const pizzaSizes = [
    { id: "s", size: "Küçük" },
    { id: "m", size: "Orta" },
    { id: "l", size: "Büyük" },
  ];

  return (
    <div className="chooseSize flex column">
      <label className="font-size-l">
        <strong>Boyut Seç *</strong>
      </label>
      {pizzaSizes.map((pizzaSize) => (
        <div className="grid-item" key={pizzaSize.id}>
          <label className="flex gap-s font-weight">
            {/* htmlFor="size" */}
            <input
              key={pizzaSize.id}
              type="radio"
              name="size"
              value={pizzaSize.boy}
            />
            {pizzaSize.size}
          </label>
        </div>
      ))}
    </div>
  );
}

export default OrderSize;
