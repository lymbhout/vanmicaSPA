import React from 'react';
import { useState } from 'react';
const ItemCounter = ({valInicial,Stock}) => {
    const [contador, setContador] = useState(valInicial)
    const sumar = ()=> contador < Stock && setContador (contador+1)
    const restar = ()=> contador > valInicial && setContador (contador-1)
    return (
        <div>
            <button className='btn btn-dark ' onClick={()=> sumar()}>+</button>
            {contador}
            <button className='btn btn-dark 'onClick={()=> restar()}>-</button>
        </div>
    );
}

export default ItemCounter;
