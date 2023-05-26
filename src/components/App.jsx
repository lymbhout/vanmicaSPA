
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { Navbarprodctos } from './NavbarProductos/Navbarprodctos';
import ItemCounter from './ItemCounter/ItemCounter';
export function App() {
  return (
    <div className="App ">
      <Navbar />
      <Navbarprodctos />
      <ItemCounter valInicial={1} Stock={10}/>
    </div>
  );
}

