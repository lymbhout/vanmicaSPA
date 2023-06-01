import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
export const Navbar = () => {
    return (
            <nav className="navbar bg-dark p-4 ">
                <div className="container-fluid ">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <CartWidget cantidadCarrito={10}/> 
                </div>
            </nav>
    );
}


