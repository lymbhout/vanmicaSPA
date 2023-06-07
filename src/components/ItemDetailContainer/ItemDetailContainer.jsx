import React from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones'
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto,setProducto] = useState([])
    useEffect(()=>{
        consultarBDD('../json/productos.json').then(prods =>{
            const prod = prods.find(item => item.id === parseInt(id))
            setProducto(prod)
        })
    },[])
    return (
        <>
            <ItemDetail prod={producto}/>
        </>
    );
}


