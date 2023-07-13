import React from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones'
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
//firebase
import { getProducto, getProductos } from '../../utils/Firebase';
export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto,setProducto] = useState([])
    useEffect(()=>{
        getProducto(id).then(prods =>{
            // const prod = prods.find(item => item.id === parseInt(id))
            setProducto(prods)
        })
    },[])
    return (
        <>
            <ItemDetail prod={producto}/>
        </>
    );
}


