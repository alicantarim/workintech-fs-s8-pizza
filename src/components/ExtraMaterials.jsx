import React, { useState } from "react";

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

function ExtraMaterials() {
  const [elections, setElections] = useState([]);
  const [errors, setErrors] = useState({ note: false, warning: false });

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

  return (
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
  );
}

export default ExtraMaterials;
