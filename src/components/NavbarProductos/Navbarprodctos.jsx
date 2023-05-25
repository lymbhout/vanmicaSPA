import React from 'react';
import Categorias from './Categorias/Categorias';
export const Navbarprodctos = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <Categorias/>
    </div>
  </div>
</nav>

        </div>
    );
}


