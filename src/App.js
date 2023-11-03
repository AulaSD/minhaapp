import { useState } from 'react';
import './App.css';
import Botao from './componentes/Botao';
import CampoTexto from './componentes/CampoTexto';
import Tabela from './componentes/Tabela';

function App() {
  
  const [campoPesquisa,setCampoPesquisa] = useState("Magneto");
  const [textoPesquisa,setTextoPesquisa] = useState("");
  
  const AoPesquisar = (evento)=>{
    evento.preventDefault();
    setTextoPesquisa(campoPesquisa);
  }

  return (
    <div>
      <form onSubmit={AoPesquisar}>
        <CampoTexto 
          valor = {campoPesquisa} 
          AoAlterado={valor => setCampoPesquisa(valor)} 
          label="Informe seu Herói ou Vilão:"/>
        <Botao texto="Pesquisar"/>
      </form>
      <Tabela textopesquisa = {textoPesquisa}/>
    </div>
  );
}

export default App;
