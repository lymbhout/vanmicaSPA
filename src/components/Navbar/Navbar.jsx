import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { BotonDarkMode } from '../BotonDarkMode/BotonDarkMode';

//context
import { useDarkModeContext } from '../Context/DarkModeContext';
export const Navbar = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <div className='sticky'>
        <div className='bg-danger text-white text-center '> Precio de envio 2.99$</div>
            <nav className={`navbar p-4  ${darkMode ? 'bg-primary' :'bg-light'} `} >
                <div className="container-fluid ">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <CartWidget cantidadCarrito={10}/> 
                    <BotonDarkMode/>
                </div>
            </nav>
        </div>
    );
}


