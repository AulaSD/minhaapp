import './App.css';
import Botao from './componentes/Botao';
import CampoTexto from './componentes/CampoTexto';
import Tabela from './componentes/Tabela';

function App() {
  
  const AoPesquisar = (evento)=>{
    evento.preventDefault();
    
  }

  return (
    <div>
      <form onSubmit={AoPesquisar}>
        <CampoTexto label="Informe seu Herói ou Vilão:"/>
        <Botao texto="Pesquisar"/>
      </form>
      <Tabela/>
    </div>
  );
}

export default App;
