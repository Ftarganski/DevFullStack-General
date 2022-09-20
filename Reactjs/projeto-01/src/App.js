import logo from "./logo.svg"
import "./App.css";
import Header from "./components/header/header";
import { useState } from "react";

function App() {
  //Estado do componente (estado, método)
  const [value, setValue] = useState(0);
  const tempo = ['Chuva','Sol'];

  return (
    //Aqui importamos os elementos
    <>
      <Header value={value}/>
      <div className="App">
        <img src={logo}/>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
