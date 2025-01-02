import { useState } from "react";
import Header from "./components/Header";
import FoodDetail from "./components/FoodDetail";
import OrderSize from "./components/OrderSize";
import AddNotes from "./components/AddNotes";
import QuantitySelection from "./components/QuantitySelection";

function App() {
  const [elections, setElections] = useState([]);
  const [errors, setErrors] = useState({ note: false, warning: false });

  //! Extra malzemeleri ekler ve çıkarır.
  const addElection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      //! Checkbox işaretlenirse değeri "elections" array e ekler.
      setElections((prevElections) => [...prevElections, value]);
    } else {
      //! Checkbox işareti kaldırılırsa, array'den çıkarır.
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
    <div id="body">
      <Header />
      <FoodDetail />
      <OrderSize addElection={addElection} errors={errors} />
      <AddNotes />
      <QuantitySelection elections={elections} />
    </div>
  );
}

export default App;
