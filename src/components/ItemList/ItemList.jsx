import React from 'react';
import { Item } from '../Item/Item';
import { ProductList } from '../ProductList/ProductList';
export const ItemList = ({prods}) => {

    return(
        <>
            {prods.map(producto => <Item item={producto} key={producto.id}/>)}
            
            
        </>
    );
}


