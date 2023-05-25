import React from 'react';

export const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'>carrito
                <p>{cantidadCarrito}</p>
            </button>
        </>
    );
}


