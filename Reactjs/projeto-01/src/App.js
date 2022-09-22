import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Sobre from "./components/sobre/sobre";
import Cadastro from "./components/cadastro/cadastro";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {
  //Estado do componente (estado, método)
  const [value, setValue] = useState(0);

  //Aqui importamos os elementos
  return (
    <>
      <Header value={value} />
      {/* <div className="App">
        <img src={logo} className="App-logo"/>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
      </div> */}
      <Sobre />
      <Cadastro />
      <Footer />
    </>
  );
}

export default App;

// Tarefas a serem feitas

// 1. Crie uma componente de cabeçalho e adicione ao arquivo App.js;

// 2. Customize os elementos desse componente usando Style como vimos em aula
//  (exe: `style={{color: 'red'}}`), similar a esse exemplo;

// 3. Passe ao menos 2 propriedade para dentro desse componente (Exemplo
//  `<Header title={'Título do cabeçalho'} subtitle={'Subtítulo do cabeçalho'}>`);

// 4. Crie um segundo componente, chamado cadastro (Exe: `<Cadastro/>`) e dentro adicione
//  um formulário com os campos nome, email e telefone, exiba essas informações na tela do
//  componente. Não esqueça de usar o useState para criar os estados de nome, email e
//  telefone e não esqueça que para o `input` detectar a mudança você precisará do `onChange`
//  chamando a função setVariavel (Exe: `setName`, `setEmail`, `setPhone`) passando o
//  valor do input para ele (Exe: `<input onChange={(e) => setName(e.target.value)} value={name}/>`)
