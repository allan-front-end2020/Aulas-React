import List from './components/List'
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <List />
      <Form />
         
      <Evento />
      <hr />
      <Condicional />
      <Lista />
    </div>
  );
}

export default App;
