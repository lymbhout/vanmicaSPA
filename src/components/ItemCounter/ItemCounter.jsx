import React from 'react';
import { useState } from 'react';
export const ItemCounter = ({valInicial,Stock,precio,onAdd}) => {
    const [contador, setContador] = useState(valInicial)
    const sumar = ()=> contador < Stock && setContador (contador+1)
    const restar = ()=> contador > valInicial && setContador (contador-1)
    return (
        <div>
            <p>{precio}</p>
            <button className='btn btn-dark ' onClick={()=> sumar()}>+</button>
            {contador}
            <button className='btn btn-dark 'onClick={()=> restar()}>-</button>
            <button className='btn btn-danger' onClick={()=> onAdd(contador)}>agregar al carrito</button>
        </div>
    );
}


