import React from 'react';
import Categorias from '../Categorias/Categorias';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../Context/DarkModeContext';
export const Navbarprodctos = () => {

  const {darkMode} = useDarkModeContext()
    return (
        <>
        <ul className={`nav flex-column p-2 ${darkMode ?'bg-light' :'bg-primary'}`}>
  <li className="nav-item">
    <Link to={'/'} className="nav-link active mt-5 " aria-current="page" href="#"><img src="../img/vanmicaimg.png" alt="" width={230} className='' /></Link>
  </li>
  <Categorias/>
</ul>
        </>
    );
}


