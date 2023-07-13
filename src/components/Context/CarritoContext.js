import { useContext, createContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = ()=> useContext(CarritoContext)

export const CarritoProvider =(props)=>{

    const [carrito,setCarrito]= useState([])
 // si existe producto en el carrito
    const isInCart = (id)=>{
        return carrito.find(prod => prod.id === id)
    }

 //Agegar producto en el carrito
    const addItem =(producto,cantidad)=>{
        //si existe en rl carrito, modifico la scantidades
        if(isInCart(producto.id)){
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant= cantidad
            setCarrito(aux)

        }else{
            //si no existe en el carito lo creo
            const prodCart ={
                ...producto,
                cant: cantidad
            }
            setCarrito([...carrito,prodCart])
        }
    }

 //eliminar producto del carrito
    const removeItem =(id)=>{
    setCarrito( carrito.filter(prod => prod.id !== id))
    }
 //vaciar carrito
    const emptyCart =()=>{
        setCarrito([])
    }

 //Cantidad total de producto en el carrito
    const getItemQuantity =()=>{
        return carrito.reduce((acum,prod)=> acum += prod.cant,0)
    }

 //Precio total de la compra
    const totalPrice = ()=>{
        return carrito.reduce((acum,prod) => acum += (prod.cant * prod.precio),0)

    }

    return (
        <CarritoContext.Provider value={{addItem,removeItem,emptyCart,getItemQuantity,totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )
}
