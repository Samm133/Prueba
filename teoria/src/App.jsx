import "./App.css";
import Card from "./Components/Card/Card";
import Coffe from "./Components/Coffe/Coffe";
import Teoria from "./Components/Teoria/Teoria";
import Users from "./Components/Users/Users";
import Prueba from "./Components/Usestate/Prueba";
import  Myroutes  from "./Routers/Routes";



function App() {
  return (
    <div className="body">
      <div className="hide">
        <Teoria />

        <hr />

        <Coffe />

        <hr />

        <Users />
        <hr />
        <Card />
         <Prueba/>
      </div>

   <Myroutes/>
    </div>
   
  );
}

export default App;
