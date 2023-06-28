import React from 'react';
import { ListasCategorias } from '../ListasCategorias/ListasCategorias';
import { useDarkModeContext } from '../Context/DarkModeContext';
const Categorias = () => {
  const {darkMode} = useDarkModeContext()
    return (
      <ul className={`navbar-nav `}>
        <ListasCategorias
        valor1={'Filtros'}
        valor2={'Filtros de aceite'} 
        valor3={'Filtro de aire'} 
        valor4={'Filtro de polen'} 
        valor5={`${darkMode ? './img/icons/filtrar (1).png' : './img/icons/filtrar.png'}`} />
        <ListasCategorias />
        <ListasCategorias />
        <ListasCategorias />
        <ListasCategorias />
        <ListasCategorias />
      </ul>
    );
}


export default Categorias;
