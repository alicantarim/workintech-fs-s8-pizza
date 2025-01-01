import React, { useState } from "react";

const pizzaSizes = [
  { id: "s", size: "Küçük" },
  { id: "m", size: "Orta" },
  { id: "l", size: "Büyük" },
];

const doughTypes = [
  { id: "i", size: "İnce" },
  { id: "n", size: "Normal" },
  { id: "k", size: "Kalın" },
];

const extras = [
  { id: 1, name: "Pepperoni" },
  { id: 2, name: "Domates" },
  { id: 3, name: "Biber" },
  { id: 4, name: "Sosis" },
  { id: 5, name: "Mısır" },
  { id: 6, name: "Sucuk" },
  { id: 7, name: "Kanada Jambonu" },
  { id: 8, name: "Ananas" },
  { id: 9, name: "Tavuk Izgara" },
  { id: 10, name: "Jalepeno" },
  { id: 11, name: "Kabak" },
  { id: 12, name: "Soğan" },
  { id: 13, name: "Sarımsak" },
];

const errorMessages = {
  note: "Sipariş notu en az 5 harften oluşabilir!",
  warning: "En az 4, en fazla 10 adet ekstra malzeme seçebilirsiniz!",
};

function OrderSize({ addElection, errors }) {
  return (
    <div>
      <div className="input-group-dough flex gap-l between container-lg">
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
        {/* ORDER SIZE SECTION END */}

        {/* ORDER DOUrH TYPE SECTION START */}
        <div className="chooseDoughType flex column">
          <label
            htmlFor="dough"
            className="title-dough font-size-l padding-bottom flex column text-start"
          >
            <strong>Hamur Seç *</strong>
            <select
              name="dough"
              id="dough"
              defaultValue={"-1"}
              // value={init.name}
            >
              <option value="-1" disabled={true}>
                Hamur Kalınlığı Seçiniz
              </option>
              {doughTypes.map((doughType) => (
                <option
                  className="semi-bol"
                  key={doughType.id}
                  value={doughType.size}
                >
                  {doughType.size}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="extra-materials container-lg">
        <h2>Ek Malzemeler</h2>
        <p>En fazla 10 malzeme seçebilirsiniz. Tanesi 5 TL</p>
        <div className="grid-container between">
          {extras.map((extra, ind) => (
            <div className="grid-item" key={extra.id}>
              <label className="flex gap-s font-weight">
                <input
                  type="checkbox"
                  onChange={addElection}
                  value={extra.name}
                  invalid={errors.warning}
                />
                {extra.name}
              </label>
            </div>
          ))}
        </div>
        {errors.warning && (
          <div data-cy="check-error" className="color-red">
            {errorMessages.warning}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderSize;
