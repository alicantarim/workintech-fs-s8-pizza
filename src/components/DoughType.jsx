import React from "react";

function DoughType() {
  const doughTypes = [
    { id: "i", size: "İnce" },
    { id: "n", size: "Normal" },
    { id: "k", size: "Kalın" },
  ];

  return (
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
  );
}

export default DoughType;
