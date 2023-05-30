import React from 'react';
import Categorias from '../Categorias/Categorias';
export const Navbarprodctos = () => {
    return (
        <>
        <ul className="nav flex-column bg-primary p-2">
  <li className="nav-item">
    <a className="nav-link active mt-5 " aria-current="page" href="#"><img src="./img/vanmicaimg.png" alt="" width={230} className='' /></a>
  </li>
  <Categorias/>
</ul>
        </>
    );
}


