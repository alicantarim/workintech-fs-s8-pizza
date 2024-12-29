import { useState } from "react";
//import "./App.css";
import Header from "./components/Header";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="body">
      <Header />
      <FoodDetail />
    </div>
  );
}

export default App;
