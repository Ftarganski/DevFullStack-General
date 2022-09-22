import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import Sobre from "./components/sobre/sobre";
import Cadastro from "./components/cadastro/cadastro";
import App from "./App";

const Rotas = () => {
  return (
    <App>
      <Routes>
        <Route exact path="/" element= {<Main />}/>   
        <Route path="/sobre" element= {<Sobre />}/>
        <Route path="/cadastro" element= {<Cadastro />}/>
      </Routes>
    </App>
  );
};

export default Rotas;
