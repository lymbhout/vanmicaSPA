import React from 'react';
import Map from '../Map/Map';
import { useDarkModeContext } from '../Context/DarkModeContext';
const Footer = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <div className={`${darkMode?'bg-primary text-light': 'bg-light'}`}>
                <ul className="d-flex ">
                    <li>
                        <div className="mt-2 text-center">
                            <img className="w-auto" src="../img/logos/entrega.png" alt="imagen" />
                            <h3 className="fs-4 mb-3">Envios Nacionales</h3>
                            <p className>Realizamos envíos a nivel nacional a través de zoom o retiras en la sede</p>
                        </div>
                    </li>
                    <li>
                        <div className="mt-2 text-center">
                            <img className="w-auto" src="../img/logos/tarjeta.png" alt="imagen" />
                            <h3 className='fs-4 mb-3'>Opciones de Pago</h3>
                            <p>Zelle, Paypal, tarjetas de crédito extranjeras, transferencias bancarias a cuentas en divisas y efectivo</p>
                        </div>
                    </li>
                    <li>
                        <div className="mt-3 text-center">
                            <img className="w-auto" src="../img/logos/seguridad.png" alt="imagen" />
                            <h3 className='fs-4 mb-3'>Compra Con Confianza</h3>
                            <p>Somos una plataforma moderna y segura diseñada para brindarte total tranquilidad y confianza </p>
                        </div>
                    </li>
                    <li>
                        <div className="mt-2 text-center">
                            <img className="w-auto" src="../img/logos/producto.png" alt="imagen" />
                            <h3 className='fs-4 mb-3'>Amplia gama de productos</h3>
                            <p>Contamos con un soporte que te asesora y acompaña en todo el proceso de compra</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`${darkMode ?'text-light ':'itemDetailBodyDark text-light'}`}>
                        <article className="d-flex flex-row  ">
                        <div className="me-5 mb-5  mt-3">
                            <Map/>
                        </div>
                        <div className=" mb-3 mt-5">
                            <p>Horario del servicio de atención al cliente Para :Venezuela</p>
                            <p>De lunes a viernes de 8:00 a 23:00 </p>
                            <p>Sábado y domingo de 8:00 a 18:00 h</p>
                            <p> cel: 04126390326 | 02123441601 | 04126127903</p>
                        </div>
                        <div className=" mt-5">
                            <a href=''><img src="../img/logos/instagram.png" alt="instagram" /></a>
                            <a href='https://wa.me/58'><img src="../img/logos/whatsapp (1).png" alt="whatsapp" className='ms-5' /></a>
                            <p>© 2022 www.vanmica.com: VANMICA Tienda online</p>
                        </div>
                        </article>
                    <div className="copy bg-primary text-light text-center ">
                        <p >© 2022 Vanmica .c.a Todos los derechos reservados | RIF: J-0000000000</p>
                    </div>
            </div>
        </>
    );
}

export default Footer;
