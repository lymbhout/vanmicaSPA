import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
import { useCarritoContext } from '../Context/CarritoContext';
const Cart = () => {
    const {carrito,emptyCart,totalPrice} = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0
                ? // si no esxisten productos en el carrito
                <>
                <h2>carrito vacio</h2>
                <Link className='nav-link' to={'/'}> <button className='btn btn-dark'>Continuar</button> </Link>
                </>
                : //si existen productos en el carrito
                <div className='container'>
                    <ItemList variedad={carrito} plantilla={'ItemCart'}></ItemList>
                    <div className="divButtons">
                        <p>resumen de la compra: Precio total{totalPrice()}</p>
                        <button className='btn btn-danger' onClick={()=> emptyCart()}>vaciar carrito</button>
                        <Link className='nav-link' to={'/'}> <button className='btn btn-dark'> continuar comprando</button> </Link>
                        <Link className='nav-link' to={'/Checkout'}> <button className='btn btn-dark'> finalizar compra </button> </Link>
                    </div>
                </div>
                
            }
        </>
    );
}
export default Cart;
