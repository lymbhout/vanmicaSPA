import React from 'react';
import {ItemCounter} from '../ItemCounter/ItemCounter.jsx';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../Context/CarritoContext.js';
export const ItemDetail = ({prod}) => {

    const {addItem} =useCarritoContext()

    const onAdd = (cantidad)=>{ //agregar producto al carrito
        console.log(cantidad);
        console.log(prod);
        addItem(prod,cantidad)
    }
    return (
<div className="card mb-3" style={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src={prod.img} className="img-fluid rounded-start" alt={prod.nombre} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.descipcion}</p>
                <p className="card-text"><small className="text-body-secondary">{prod.descipcion}</small></p>
                <ItemCounter valInicial={1} Stock={5} precio={prod.precio} onAdd={onAdd}/>
                <Link className='nav-link' to={'/Cart'}> <button className='btn'>Finalizar compra</button> </Link>
            </div>
        </div>
    </div>
</div>
    );
}


