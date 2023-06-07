import React from 'react';
import { useEffect,useState } from 'react';
import { ItemList } from '../../components/ItemList/ItemList.jsx';
import { consultarBDD } from '../../utils/funciones.js';
import { ProductList } from '../ProductList/ProductList';
// componente que consulta la base de datos y renderiza
export const ItemListContainer = () => {
    // const [productos,setProductos] = useState([])
    const [filter,setfilter]= useState([])
    useEffect(() =>{
        consultarBDD('../json/productos.json').then(prods =>{
            const prod = prods.find(item => item.id === 1)
            setfilter(prod)
            /*const variedad = prods.filter(item => item.idcategoria === idcategoria)
            const items = ItemList({prods})
            setProductos(items)*/
        })
    },[])
    return (
        <div>
            <ProductList producto={filter}/>
            {/* <ProductList producto={productos}/> */}
            {/* {productos} */}
        </div>
    );
}


