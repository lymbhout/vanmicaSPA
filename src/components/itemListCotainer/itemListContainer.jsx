import React from 'react';
import { useEffect,useState } from 'react';
import { ItemList } from '../../components/ItemList/ItemList.jsx';
import { consultarBDD } from '../../utils/funciones.js';
// componente que consulta la base de datos y renderiza
export const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const [filter,setfilter]= useState([])
    useEffect(() =>{
        consultarBDD('./json/productos.json').then(prods =>{
            const items = ItemList({prods})
            setProductos(items)
        })
    },[])

    return (
        <div>
            {productos}
        </div>
    );
}


