import React from 'react';

export const ProductFindList = ({variedad}) => {
    console.log(variedad);
    return (
<div className="card" style={{width: '18rem'}} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <img src={`./img/${variedad.img}`} alt={`${variedad.nombre}`} />
    <div className="card-body collapse" id="collapseExample">
        <p className="card-text">{variedad.descripcion}</p>
    </div>
        <h5 className="card-title">{variedad.nombre} {variedad.modelo}</h5>
        <p className="card-text">{variedad.numeroDArticulo}</p>
        <p className="card-text">{variedad.precio}</p>
        <a href="#" className="btn btn-danger"> Compra</a>
</div>
    );
}


