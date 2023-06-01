import React from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones'
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { ProductList } from '../ProductList/ProductList';
export const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([])
    useEffect(()=>{
        consultarBDD('../json/productos.json').then(prods =>{
            const prod = prods.find(item => item.id === 1)
            setProducto(prod)
        })
    },[])
    return (
        <div>
            <ItemDetail prod={producto}/>
            <ProductList producto={producto}/>
        </div>
    );
}


