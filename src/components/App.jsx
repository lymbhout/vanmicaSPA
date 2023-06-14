
import './App.css';
// react routes
import { BrowserRouter,Routes,Route } from "react-router-dom";
//context
import { DarkModerProvider } from './Context/DarkModeContext';
//componentes
import {Navbar} from './Navbar/Navbar';
import { Navbarprodctos } from './NavbarProductos/Navbarprodctos';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './ItemListCotainer/ItemListContainer';
import { Checkout } from './Checkout/Checkout';
import Cart from './Cart/Cart';
import Home from './Home/Home';
import { DarkModerProvider } from './Context/DarkModeContext';
export function App() {
  return (
  <BrowserRouter>
    <DarkModerProvider>
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
              <Route path='/Checkout'element={<Checkout/>}></Route>
              <Route path='/Cart'element={<Cart/>}></Route>
            </Routes>
                {/* <ItemListContainer/> */}
          </div>
        </div>
      </div>
    </DarkModerProvider>
  </BrowserRouter>
  );
}

