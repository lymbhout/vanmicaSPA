import React from 'react';
import { ProductListCategori } from '../ProductListCategori/ProductListCategori';
import { useParams } from 'react-router-dom';
export const ProductList = ({producto}) => {
    const {idcategoria} = useParams()
    console.log(producto);
    return (
            <>
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={producto.img} className="img-fluid rounded-start" alt={producto.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{`Compre ${idcategoria} Online`}</h5>
                                <p className="card-text">{"las mejores marcas"}</p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                        <ProductListCategori className='bg-primary'/>
                    </div>
                </div>
            </>
    );
}

