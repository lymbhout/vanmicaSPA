import React from 'react';
import { useRef } from 'react';
import { useCarritoContext } from '../Context/CarritoContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//toatify
import {  toast } from 'react-toastify';
import { createOrdenCompra,updateProducto,getProducto } from '../../utils/Firebase';
export const Checkout = () => {
    const {carrito,emptyCart,totalPrice} = useCarritoContext()
    const datosForm = useRef()
    let navegate = useNavigate()
    const consultarform = (e) => {
        e.preventDefault()
        console.log(datosForm.current)
        const data = new FormData(datosForm.current)
        console.log(data);
        const cliente = Object.fromEntries(data)
        console.log(cliente);
        
        const aux = [...carrito]
        
        aux.forEach(prodCarrito =>{ // descontar stock de BDD
            getProducto(prodCarrito.id).then(prodBDD =>{
                prodBDD.stock -= prodCarrito.cant //descuento stock
                updateProducto(prodBDD.id,prodBDD)
            })
        })
        
        createOrdenCompra(cliente,aux,totalPrice(), new Date().toISOString()).then(ordeCompra =>{
            toast.success(` Gracias por comprar en Vanmica !            
                    su orden de compra con el id ${ordeCompra.id}     
                    por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice()) } fue realizada con exito !`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

                e.target.reset()
                emptyCart()
                navegate('/')
        })
    }
    


    return (
        <>
            {carrito.length == 0
            ?
        <>
            <h2>Para finalizar la compra debe tener productos en el carrito</h2>
            <Link className='nav-link' to={'/'}> <button className='btn btn-dark'>Continuar</button> </Link>
        </>
        :
        <div className='container contform'>
            <form onSubmit={consultarform} ref={datosForm}> 
                <div className="mb-3">
                    <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                    <input type='text' className='form-control' name='nombre' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type='email' className='form-control' name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className='form-label'>Numero telefonico</label>
                    <input type='number' className='form-control' name='celular' />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className='form-label'>Direccion</label>
                    <input type='text' className='form-control' name='direccion'/>
                </div>
                <button type='submit' className='btn btn-dark'> Finalizar compra</button>
            </form>
        </div>
            }
        </>
    );
}


