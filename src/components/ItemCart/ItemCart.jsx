import React from 'react';
import { useCarritoContext } from '../Context/CarritoContext';
const ItemCart = ({item}) => {
    const {removeItem} = useCarritoContext()
    return (
        <div className='card mb-3 cardCart'>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={item.img} alt="" />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.nombre} {item.modelo} </h5>
                        <p className='card-text'>cantidad: {item.cant}</p>
                        <p className='card-text'>Precio unitario: {item.precio}</p>
                        <p className='card-text'>Subtotal: {item.cant * item.precio}</p>
                        <button className='btn btn-danger' onClick={()=> removeItem(item.id)}>Eliminar del carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;

