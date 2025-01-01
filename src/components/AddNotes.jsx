import React, { useState } from "react";

const errorMessages = {
  note: "Sipariş notu en az 5 harften oluşabilir!",
  warning: "En az 4, en fazla 10 adet ekstra malzeme seçebilirsiniz!",
};

function AddNotes() {
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
    <div>
      <div className="container-lg flex column margin-bottom-lg">
        <label htmlFor="order-note" className="margin-bottom">
          <h2>Sipariş Notu</h2>
        </label>
        <textarea
          style={{ minWidth: "650px" }}
          name="order-note"
          id="order-note"
          placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          cols={5}
          rows={4}
          invalid={errors.note}
        ></textarea>
        {errors.note && (
          <div data-cy="note-error" className="color-red">
            {errorMessages.note}
          </div>
        )}
      </div>
      <hr className="margin-bottom-lg container-lg" />
    </div>
  );
}

export default AddNotes;
