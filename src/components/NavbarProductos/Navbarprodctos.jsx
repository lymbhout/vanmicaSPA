import React from 'react';
import Categorias from '../Categorias/Categorias';
export const Navbarprodctos = () => {
    return (
        <>
        <ul className="nav flex-column bg-primary">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">VANMICA</a>
  </li>
  <Categorias/>
</ul>
        </>
    );
}


