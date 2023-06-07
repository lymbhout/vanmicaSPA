import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (
  // plantilla de productos
  <div className="card" style={{width: '18rem'}} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <Link to={`/item/${item.id}`}><img src={`./img/${item.img}`} alt={`${item.nombre}`} /></Link>
    <div className="card-body collapse" id="collapseExample">
      <p className="card-text">{item.descripcion}</p>
    </div>
      <h5 className="card-title">{item.nombre} {item.modelo}</h5>
      <p className="card-text">{item.numeroDArticulo}</p>
      <p className="card-text">{item.precio}</p>
      <Link href="#" className="btn btn-danger"> Compra</Link>
  </div>

    );
}


