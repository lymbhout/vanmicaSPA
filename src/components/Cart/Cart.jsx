import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList';
const Cart = () => {
    const carrito =[    {
        nombre:"cauchos",
        id:3,
        precio:"5.99",
        modelo:"",
        idcategoria:"cauchos",
        descripcion:"bujia de auto ford",
        numeroDArticulo:"9",
        stock:"",
        img:"",
        cant:5
        
    },
    {
        nombre:"cauchos",
        id:4,
        precio:"5.99",
        modelo:"",
        idcategoria:"cauchos",
        escripcion:"bujia de auto ford",
        umeroDArticulo:"9",
        stock:"",
        img:"",
        cant:5
    }]
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
                        <p>resumen de la compra: Precio total</p>
                        <button className='btn btn-danger' onClick={()=> console.log('productos eliminados')}>vaciar carrito</button>
                        <Link className='nav-link' to={'/'}> <button className='btn btn-dark'> continuar comprando</button> </Link>
                        <Link className='nav-link' to={'/Checkout'}> <button className='btn btn-dark'> finalizar compra </button> </Link>
                    </div>
                </div>
                
            }
        </>
    );
}
export default Cart;
