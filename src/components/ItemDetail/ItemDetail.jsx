import React from 'react';
import {ItemCounter} from '../ItemCounter/ItemCounter.jsx';
export const ItemDetail = ({prod}) => {

    
    const onAdd = (cantidad)=>{ //agregar producto al carrito
        console.log(cantidad);
        console.log(prod);
    }
    return (
<div className="card mb-3" style={{maxWidth: '540px'}}>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt={prod.nombre} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.descipcion}</p>
                <p className="card-text"><small className="text-body-secondary">{prod.descipcion}</small></p>
                <ItemCounter valInicial={1} Stock={5} precio={prod.precio} onAdd={onAdd}/>
            </div>
        </div>
    </div>
</div>
    );
}


