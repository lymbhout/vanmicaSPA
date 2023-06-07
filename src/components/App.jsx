
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Navbar} from './Navbar/Navbar';
import { Navbarprodctos } from './NavbarProductos/Navbarprodctos';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './ItemListCotainer/ItemListContainer';
import Home from './Home/Home';
export function App() {
  return (
  <BrowserRouter>
    <div className="App ">
      <div className='row '>
        <div className='col '>
          <Navbarprodctos  />
        </div>
        <div className='col-10 '>
          <Navbar />
          <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/category/:idcategoria'element={<ItemListContainer/>}></Route>
            <Route path='/item/:id'element={<ItemDetailContainer/>} ></Route>
          </Routes>
              {/* <ItemListContainer/> */}
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

