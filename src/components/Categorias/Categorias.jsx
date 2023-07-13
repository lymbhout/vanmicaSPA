import React from 'react';
import { ListasCategorias } from '../ListasCategorias/ListasCategorias';
import { useDarkModeContext } from '../Context/DarkModeContext';
import { Link } from 'react-router-dom';
const Categorias = () => {
  const {darkMode} = useDarkModeContext()
    return (
      <ul className={`navbar-nav `}>
        <ListasCategorias/>
      </ul>
    );
}


export default Categorias;
