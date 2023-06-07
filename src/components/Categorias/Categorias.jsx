import React from 'react';
import { ListasCategorias } from '../ListasCategorias/ListasCategorias';
const Categorias = () => {
    return (
      <ul className="navbar-nav">
        <ListasCategorias valor1={'Filtros'} valor2={'Filtros de aceite'} valor3={'Filtro de aire'} valor4={'Filtro de polen'}/>
        <ListasCategorias />
        <ListasCategorias />
        <ListasCategorias />
        <ListasCategorias />
        <ListasCategorias />
      </ul>
    );
}

export default Categorias;
