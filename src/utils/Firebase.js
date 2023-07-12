
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection,doc,addDoc,getDocs,getDoc,updateDoc,deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmQ8IeXcRVGAvXlgxJZ5MR03_jng91Bas",
  authDomain: "vanmica-site.firebaseapp.com",
  projectId: "vanmica-site",
  storageBucket: "vanmica-site.appspot.com",
  messagingSenderId: "116549438331",
  appId: "1:116549438331:web:942441dfe2e826b68d8bde",
  measurementId: "G-FBCJZBMKQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore() // referencia a mi base de datos


/*

CRUD
C: CREATE
R: READ
U: UPDATE
D: DELATE

*/

export const cargarBDD = async()=>{
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod)=>{
    await addDoc(collection(db,'productos'), {// collestion lo que hace es, si existe mi coleccion lo consulta, si no, lo crea y lo consulta
      nombre: prod.nombre,
      precio: prod.precio,
      modelo: prod.modelo,
      idcategoria: prod.idcategoria,
      descripcion: prod.descripcion,
      auto:prod.auto,
      numeroDArticulo: prod.numeroDArticulo,
      fabricante:prod.fabricante,
      stock: prod.stock,
      img:prod.img

    })
  })
}

export const getProductos = async()=>{
  const productos = await getDocs(collection(db,'productos'))
  const items = productos.docs.map((prod)=>{
    return { ... prod.data(), id: prod.id }
  })
  return items
}

export const getProducto = async (id) =>{
  const producto = await getDoc(doc(db,'productos', id))
  const item = { ... producto.data(),id: producto.id }
  return item
}

export const updateProducto = async (id,info)=>{
    await updateDoc(doc(db,'productos',id),info)
}

//CREATE AND READ ORDEN DE COMPRA

export const createOrdenCompra = async (cliente,productos,precioTotal,fecha)=>{ //CREATE
  const ordenCompra = await addDoc(collection(db,'ordenesDCompra'),{
    datosClientes: cliente,
    productos: productos,
    precioTotal: precioTotal,
    fecha: fecha
  })
return ordenCompra
}

export const getOrdenCompra = async (id) =>{
  const oC = await getDoc(doc(db,'ordenesDCompra',id))
  const ordenCompra = { ... oC.data(),id: oC.id }
  return ordenCompra
}