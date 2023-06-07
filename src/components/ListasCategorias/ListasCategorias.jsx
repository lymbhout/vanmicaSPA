import React from 'react';

export const ListasCategorias = ({valor1,valor2,valor3,valor4}) => {
    return (
      <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            {valor1}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item " href="#">{valor2}</a></li>
            <li><a className="dropdown-item" href="#">{valor3}</a></li>
            <li><a className="dropdown-item" href="#">{valor4}</a></li>
          </ul>
      </li>
    );
}

