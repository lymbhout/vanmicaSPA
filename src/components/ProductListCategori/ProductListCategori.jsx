import React from 'react';
import { useState,useEffect } from 'react';
import { consultarBDD } from '../../utils/funciones';
// import { ProductFindList } from '../ProductFindList/ProductFindList';
import { Item } from '../Item/Item';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList.jsx';
// componente filtrador
export const ProductListCategori = () => {
    const [categoria,setCategoria] = useState([])
    const {idcategoria} = useParams()
    useEffect(()=>{
        consultarBDD('../json/productos.json').then (tegoria =>{
            const variedad = tegoria.filter(item => item.idcategoria === idcategoria)
            const items = <ItemList variedad={variedad} plantilla={'item'}></ItemList>
            setCategoria(items)
            
            // const vari = variedad.map(item => < Item item={item}/>)
        })
    },[idcategoria])
    return (
        <>
        {categoria}
        </>
    );
}


