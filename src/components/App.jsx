
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { Navbarprodctos } from './NavbarProductos/Navbarprodctos';
import { ProductListCategori } from './ProductListCategori/ProductListCategori';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
export function App() {
  return (
    <div className="App ">
      <div className='row '>
        <div className='col '>
          <Navbarprodctos  />
        </div>
        <div className='col-10 '>
          <Navbar />
          <ItemDetailContainer/>
        </div>
      </div>
    </div>
  );
}

