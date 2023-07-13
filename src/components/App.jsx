
import './App.css';
// react routes
import { BrowserRouter,Routes,Route } from "react-router-dom";
//context
import { DarkModerProvider } from '../components/Context/DarkModeContext';
//componentes
import {Navbar} from './Navbar/Navbar';
import { Navbarprodctos } from './NavbarProductos/Navbarprodctos';
import Footer from './Footer/Footer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './ItemListCotainer/ItemListContainer';
import { Checkout } from './Checkout/Checkout';
import Cart from './Cart/Cart';
import Home from '../components/Home/Home';
//FIREBASE
import { cargarBDD } from '../utils/Firebase';
//carritoContext
import { CarritoProvider } from './Context/CarritoContext';
export function App() {
  // cargarBDD()
  return (
  <BrowserRouter>
    <DarkModerProvider>
      <CarritoProvider>
        <div className="App ">
          <div className='row '>
            <div className='col '>
              <Navbarprodctos  />
            </div>
            <div className='col-10 '>
              <Navbar className=''/>
              <Routes>
                <Route path='/'element={<Home/>}></Route>
                <Route path='/category/:idcategoria'element={<ItemListContainer/>}></Route>
                <Route path='/item/:id'element={<ItemDetailContainer/>} ></Route>
                <Route path='/Checkout'element={<Checkout/>}></Route>
                <Route path='/Cart'element={<Cart/>}></Route>
              </Routes>
                  {/* <ItemListContainer/> */}
              <Footer/>
            </div>
          </div>
        </div>
      </CarritoProvider>
    </DarkModerProvider>
  </BrowserRouter>
  );
}

