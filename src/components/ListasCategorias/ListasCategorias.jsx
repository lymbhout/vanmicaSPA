import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../Context/DarkModeContext';
export const ListasCategorias = React.memo(() => {
  const {darkMode} = useDarkModeContext()
    return (
  <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className={`accordion-button  ${darkMode ? 'text-body bg-light' : 'bg-primary text-light'} `} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
          <img src={`${darkMode ? '../img/icons/filtrar (1).png' : '../img/icons/filtrar.png'}`} alt="" className='imgPequeña me-3' />
          Filtros
        </button>
      </h2>
      <div id="flush-collapseOne" className={`"accordion-collapse collapse show ${darkMode ? 'text-body bg-light' : 'bg-primary text-light'}"`} data-bs-parent="#accordionFlushExample" style={{}}>
        <Link to={`/category/Filtro de aceite`} className={`accordion-body ${darkMode ? 'text-body ' : ' text-light'}`}> Filtro de aceite</Link>
        <Link to={`/category/Filtro de aire`} className={`accordion-body d-block ${darkMode ? 'text-body ' : ' text-light'}`}> Filtro de aire</Link>
        <Link to={`/category/Filtro de gasolina`} className={`accordion-body ${darkMode ? 'text-body ' : ' text-light'}`}> Filtro de gasolina</Link>
      </div>
    </div>
  </div>
    );
})

