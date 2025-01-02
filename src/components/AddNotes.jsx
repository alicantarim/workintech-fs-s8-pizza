import React, { useState } from "react";

const errorMessages = {
  note: "Sipariş notu en az 5 harften oluşabilir!",
  warning: "En az 4, en fazla 10 adet ekstra malzeme seçebilirsiniz!",
};

function AddNotes() {
  const [errors, setErrors] = useState({ note: false, warning: false });

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
