
import './App.css';
import {Navbar} from './Navbar/Navbar';
import { Navbarprodctos } from './NavbarProductos/Navbarprodctos';
import {ItemListContainer} from './ItemListCotainer/ItemListContainer';
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
          <ItemListContainer/>
          <ItemDetailContainer/>
        </div>
      </div>
    </div>
  );
}

