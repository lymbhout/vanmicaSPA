import React from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones';
// componente que consulta la base de datos y renderiza
const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    useEffect(() =>{
        consultarBDD('./json/productos.json').then(prods => console.log(prods))
    },[])
    return (
        <div>
            
        </div>
    );
}

export default ItemListContainer;
