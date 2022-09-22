import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <ul className="menu">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
        </ul>
       </div>
  );
};

export default Header;