import React from 'react';
import { Item } from '../Item/Item';
import { ProductList } from '../ProductList/ProductList';
import ItemCart from '../ItemCart/ItemCart';
export const ItemList = ({variedad,plantilla}) => {
    console.log(variedad);
    return(
        <>
        {
            plantilla === 'item'
            ?
            variedad.map(producto => <Item item={producto} key={producto.id}/>)
            :
            variedad.map(producto => <ItemCart item={producto} key={producto.id}/>)
        }
            
            
        </>
    );
}


