import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../components/Context/DarkModeContext';
export const Item = ({item}) => {
console.log(item);
  const {darkMode} = useDarkModeContext()
    return (
  // plantilla de productos
  <div className={`card ${darkMode ? 'bg-primary text-white':'bg-light'}`} style={{width: '18rem'}} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <Link to={`/item/${item.id}`}><img src={item.img} alt={item.nombre} /></Link>
    <div className='card-body collapse ' id="collapseExample">
      <p className="card-text">{item.descripcion}</p>
    </div>
      <h5 className="card-title">{item.nombre} {item.modelo}</h5>
      <p className="card-text">{item.numeroDArticulo}</p>
      <p className="card-text">{item.precio}</p>
      <Link href="#" className={`btn ${darkMode ?'btn-outline-danger':'btn-danger'}`}> Compra</Link>
  </div>
    );
}


