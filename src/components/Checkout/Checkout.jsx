import React from 'react';

export const Checkout = () => {
    return (
        <div className='container contform'>
            <form > 
            <div className="mb-3">
                <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                <input type='text' className='form-control' name='nombe' />
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


