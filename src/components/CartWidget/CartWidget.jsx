import React from 'react';
import { Link } from 'react-router-dom';
export const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <Link to={'/cart'}><button className='btn btn-dark relativo'>
                <i class="bi bi-cart fs-2 p-2"></i>
                <p className='centerPosition'>{cantidadCarrito}</p>
            </button></Link>
        </>
    );
}


