import React from 'react';
export const Banner = () => {

    return (
    <div id="carouselExampleIndicators" className="carousel slide t-3" data-bs-ride="true"  data-bs-interval='3000'>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        </div>
        <div className="carousel-inner  d-flex" >
            <div className="carousel-item active  ">
            <img src="../img/banner/BANNER1.PNG" className="height" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="../img/banner/BANNER2.PNG" className="  height" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
}


