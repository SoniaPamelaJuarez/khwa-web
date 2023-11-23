import './main.css';
import flecha2 from '../../assets/flecha2.png';
import khwaGif from '../../assets/khwaGif.gif';

const HolaMob = () => {
    return(
        <main id="main">
            <div class="main">
                <div class="hola">
                    <h1>Hola, somos KHWA!</h1>
                    <h3>Profesionales en Datos, Ciencia & Creatividad </h3>
                </div>
                <div class="isologo-div">
                    <img class="isologo-img" src={khwaGif} alt='khwa'/>
                </div>
                <div className='proposito'>
                    <p>Nuestro propósito es <strong>impulsar la esencia única</strong> de cada marca mediante estrategias digitales <strong>personalizadas</strong>. Creemos que las marcas que <strong>trascienden</strong> son aquellas que conectan de manera auténtica con su audiencia.</p>
            </div>
            <div>
                <a href='#contacto' class="btn btn-primary btn-contact" type="button">CONECTA CON NOSOTROS</a>
            </div>
            <div class="div-flecha">
                <a href="#servicios" type="button"><img class='arrow' alt='serviciosdigitales' src={flecha2}></img></a>
            </div> 
            </div>          
        </main>
    )

}

export default HolaMob;