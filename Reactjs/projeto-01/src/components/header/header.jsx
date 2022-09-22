import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <h2 className="tittle">Aqui Título</h2>
      <h3 className="subTittle">Aqui Subitítulo</h3>
      <ul className="menu">
        <li>Home</li>
        <li>Sobre</li>
        <li>Cadastro</li>
        <li>Teste</li>
      </ul>
    </div>
  );
};

export default Header;