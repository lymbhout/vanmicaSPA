import React from 'react';
import Banner from '../Banner/Banner';
import { useDarkModeContext } from '../Context/DarkModeContext';
const Home = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <> 
        <Banner/>
        <h1 className={`mt-5 ${darkMode ? 'text-light':'text-body'}`}> LOS REPUESTOS MÁS POPULARES ENTRE LOS USUARIOS</h1>
        
        </>
    );
}

export default Home;
