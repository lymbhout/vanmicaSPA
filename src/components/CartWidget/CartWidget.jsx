import React from 'react';
import { Link } from 'react-router-dom';
export const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <Link to={'/cart'}><button className='btn btn-dark'>carrito
                <p>{cantidadCarrito}</p>
            </button></Link>
        </>
    );
}


