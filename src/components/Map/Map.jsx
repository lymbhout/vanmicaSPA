import React from 'react';

const Map = () => {
    return (
        <>
        <div className="mapouter ms-4"><div className="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Avenida Villa Heroica,Guatire Estado Miranda z.p 1221&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://2yu.co">2yu</a><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:100%;width:100%;}" }} /><a href="https://embedgooglemap.2yu.co/">html embed google map</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}" }} /></div></div>
        <p className='ms-4'> Ubicacion : Avenida Villa Heroica, CC Villa nueva , Nivel PB , Local 7 , Urbanización Guatire Estado Miranda z.p 1221</p>
        </>
    );
}

export default Map;
