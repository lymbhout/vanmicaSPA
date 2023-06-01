import React from 'react';
import { useState,useEffect } from 'react';
import { consultarBDD } from '../../utils/funciones';
import { ProductFindList } from '../ProductFindList/ProductFindList';
export const ProductListCategori = () => {
    const [categoria,setCategoria] = useState([])
    useEffect(()=>{
        consultarBDD('../json/productos.json').then (tegoria =>{
            const variedad = tegoria.filter(item => item.categoria === "bujias")
            const vari = variedad.map(item => <ProductFindList variedad={item}/>)
            setCategoria(vari)
            
        })
    },[])
    return (
        <>
        {categoria}
        </>
    );
}


