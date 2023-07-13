import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../Context/CarritoContext';
export const CartWidget = ({cantidadCarrito}) => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link to={'/cart'}>
                <button className='btn btn-dark relativo'>
                    <i class="bi bi-cart fs-2 p-2"></i>
                    <p className='centerPosition'>{cantidadCarrito}</p>
                </button>
                {getItemQuantity() > 0 && 
                <span className='cantCarrito'>
                    {getItemQuantity()}
                </span>}
            </Link>
        </>
    );
}


