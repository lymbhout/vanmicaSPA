import React from 'react';
import { useEffect,useState } from 'react';
import { ItemList } from '../../components/ItemList/ItemList.jsx';
import { consultarBDD } from '../../utils/funciones.js';
import { ProductList } from '../../components/ProductList/ProductList.jsx';
import { useParams } from 'react-router-dom';
//firebase
import { getProductos } from '../../utils/Firebase';
// componente que consulta la base de datos y renderiza
export const ItemListContainer = () => {
    const {idcategoria} = useParams()
    // const [productos,setProductos] = useState([])
    const [filter,setfilter]= useState([])
    useEffect(() =>{
        getProductos().then(prods =>{
            const prod = prods.find(item => item.idcategoria === idcategoria)
            setfilter(prod)

            // const variedad = prods.filter(item => item.idcategoria === idcategoria)
            // const items = ItemList({prods})
            // setfilter(items)
        })
    },[])
    return (
        <div>
            <ProductList producto={filter}/>
            {/* <ProductList producto={productos}/> */}
            {/* {filter} */}
        </div>
    );
}


