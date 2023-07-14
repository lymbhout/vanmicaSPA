import React from 'react';
import { useState,useEffect } from 'react';
import { consultarBDD } from '../../utils/funciones';
// import { ProductFindList } from '../ProductFindList/ProductFindList';
import { Item } from '../Item/Item';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList/ItemList.jsx';
// componente filtrador
//firebase
import { getProductos } from '../../utils/Firebase';
export const ProductListCategori = () => {
    const [categoria,setCategoria] = useState([])
    const {idcategoria} = useParams()
    console.log(idcategoria);
    useEffect(()=>{
        getProductos().then (tegoria =>{
            const variedad = tegoria.filter(prod => prod.stock > 0).filter(item => item.idcategoria === idcategoria )
            // const vari = variedad.map(item => < Item item={item}/>)
            const items = <ItemList variedad={variedad} plantilla={'item'}></ItemList>
            setCategoria(items)
            console.log(variedad);
        })
    },[idcategoria])
    return (
        <>
        {categoria}
        </>
    );
}


