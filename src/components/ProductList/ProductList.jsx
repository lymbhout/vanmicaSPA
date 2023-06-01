import React from 'react';
import { ProductListCategori } from '../ProductListCategori/ProductListCategori';
export const ProductList = ({producto}) => {
    return (
            <>
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`./img/${producto.img}`} className="img-fluid rounded-start" alt={producto.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{`Compre ${producto.nombre} Online`}</h5>
                                <p className="card-text">{"las mejores marcas"}</p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                        <ProductListCategori/>
                    </div>
                </div>
            </>
    );
}

