import React from 'react';
import Categorias from '../Categorias/Categorias';
import { Link } from 'react-router-dom';
export const Navbarprodctos = () => {
    return (
        <>
        <ul className="nav flex-column bg-primary p-2">
  <li className="nav-item">
    <Link to={'/'} className="nav-link active mt-5 " aria-current="page" href="#"><img src="../img/vanmicaimg.png" alt="" width={230} className='' /></Link>
  </li>
  <Categorias/>
</ul>
        </>
    );
}


