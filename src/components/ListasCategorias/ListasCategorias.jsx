import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../Context/DarkModeContext';
export const ListasCategorias = React.memo(({valor1,valor2,valor3,valor4,valor5}) => {
  const {darkMode} = useDarkModeContext()
    return (
      <li className="nav-item dropdown center ">
              <img src={valor5} alt="" className='imgPequeña me-3' />
              <a className={`nav-link dropdown-toggle text-white d-inline ${darkMode ? 'text-body' : 'text-light'}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                {valor1}
              </a>
          <ul className="dropdown-menu bg-primary">
            <li><a className="dropdown-item " href="#">{valor2}</a></li>
            <li><a className="dropdown-item" href="#">{valor3}</a></li>
            <li><a className="dropdown-item" href="#">{valor4}</a></li>
          </ul>
      </li>
    );
})

