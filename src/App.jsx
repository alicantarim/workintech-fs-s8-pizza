import { useState } from "react";
//import "./App.css";
import Header from "./components/Header";
import FoodDetail from "./components/FoodDetail";
import OrderSize from "./components/OrderSize";
import DoughType from "./components/DoughType";
import ExtraMaterials from "./components/ExtraMaterials";
import AddNotes from "./components/AddNotes";
import QuantitySelection from "./components/QuantitySelection";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="body">
      <Header />
      <FoodDetail />
      <div className="input-group-dough flex gap-l between container-lg">
        <OrderSize />
        <DoughType />
      </div>
      <div>
        <ExtraMaterials />
      </div>
      <div>
        <AddNotes />
      </div>
      <hr className="margin-bottom-lg container-lg" />
      <div className="flex between container-lg">
        <QuantitySelection />
        <OrderSummary />
      </div>
    </div>
  );
}

export default App;
