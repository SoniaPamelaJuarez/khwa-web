import './sitioWeb.css';
import webProgramming from '../../assets/webProgramming.png';
import webDesign from '../../assets/webDesign.png';
import webAud from '../../assets/webAud.png';

const SitioWeb = () =>{
    return (
        <div id="sitioWeb">
            <div class="titulo-web">
                <h1 class="font-first"><mark>Sitio Web . Web Site</mark></h1>
            </div>
            <div class="card-div">
                <div class="card-web">
                    <img src={webDesign} class="card-img-top" alt="..."/>
                    <div class="card-body body-web">
                        <h3 class="card-title font-first">Diseño Web</h3>
                        <p class="card-text font-secondary">Juntos podemos lograr un diseño personalizado que se adapte a tus necesidades</p>
                        <a href="#" class="btn btn-primary font-secondary color-lila">Quiero más información</a>
                    </div>
                </div>
                <div class="card-web">
                    <img src={webProgramming} class="card-img-top" alt="..."/>
                    <div class="card-body body-web">
                        <h3 class="card-title font-first">Creación de Web</h3>
                        <p class="card-text font-secondary">Muestra tus servicios y atrae más clientes con una landing page funcional & visualmente atractiva </p>
                        <a href="#" class="btn btn-primary font-secondary color-lila">Quiero más información</a>
                    </div>
                </div>
                <div class="card-web">
                    <img src={webAud} class="card-img-top" alt="..."/>
                    <div class="card-body body-web">
                        <h3 class="card-title font-first">Auditoría Web</h3>
                        <p class="card-text font-secondary">¿Ya tienes una web pero no tiene la funcionalidad o el diseño que te representa? Nosotros podemos ayudarte a crear la página que se adapte a tus necesidades</p>
                        <a href="#" class="btn btn-primary font-secondary color-lila">Quiero más información</a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SitioWeb;