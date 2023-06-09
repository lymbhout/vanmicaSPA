import React from 'react';
import { useRef } from 'react';
export const Checkout = () => {
    const datosForm = useRef()
    const consultarform = (e) => {
        e.preventDefault()
        console.log(datosForm.current)
        const data = new FormData(datosForm.current)
        console.log(data);
        const cliente = Object.fromEntries(data)
        console.log(cliente);
    }



    return (
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
    );
}


