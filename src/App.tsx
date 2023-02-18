import "./App.css";
import { SelectCitys } from "./components/SelectCitys";
import { SelectState } from "./components/SelectState";
import { useState } from "react";

function App() {
  const [selectedUf, setSelectedUf] = useState('');

  return (
    <div className="App">
      <SelectState onChange={setSelectedUf} />
      <SelectCitys uf={selectedUf} />
    </div>
  );
}

export default App;
