import "./App.css";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <div className="App">
      <Usuario nombre="Alvaro" edad={31} nacinalidad="Venezuela"/>
    </div>
  );
}

export default App;
