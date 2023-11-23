import './servicios.css';
import nereaFotovideo from '../../assets/nereaFotovideo.gif';
import flexz from '../../assets/flexz.gif';
import comidas from '../../assets/comidas.gif';

const Servicios = () => {
    return (
    <div id="servicios" class="div-father">
        <div class="servicios">
            <div class="div-card">
                <div class="card-1">
                    <h1 class='mobile-img'>E</h1>
                    <p class='mobile-img'>n un mundo saturado de promesas genéricas, ofrecemos un compromiso <mark>personalizado</mark>. En Khwa, comprendemos que cada marca es única, y tu estrategia digital debe reflejar esa singularidad. Nos sumergimos en tus sueños y aspiraciones para crear estrategias que no solo destaquen, sino que también trasciendan los límites convencionales.</p>
                    <p class='web-img'>En un mundo saturado de promesas genéricas, ofrecemos un compromiso <mark>personalizado</mark>. En Khwa, comprendemos que cada marca es única, y tu estrategia digital debe reflejar esa singularidad. Nos sumergimos en tus sueños y aspiraciones para crear estrategias que no solo destaquen, sino que también trasciendan los límites convencionales.</p>
                </div>
                <div class="card-2 img-sinpad">
                    <img class="card black" alt="estrategiadigital" src={flexz}/>
                </div>
            </div>
            <div class="div-card">
                <div class="card-2 img-sinpad">
                    <img class="card black mobile-img" alt="estrategiadigital" src={nereaFotovideo}/>
                </div>
                <div class="card-1">
                    <h1 class='mobile-img'>S</h1>
                    <p class='mobile-img'>omos apasionados, pero nuestra pasión no se limita a los códigos y algoritmos. Nos apasiona cada historia única detrás de las marcas que confían en nosotros. No somos simplemente una agencia digital, somos artesanos digitales dedicados a esculpir narrativas que resuenen en el corazón de tu audiencia.</p>
                    <p class='web-img'>Somos apasionados, pero nuestra pasión no se limita a los códigos y algoritmos. Nos apasiona cada historia única detrás de las marcas que confían en nosotros. No somos simplemente una agencia digital, somos artesanos digitales dedicados a esculpir narrativas que resuenen en el corazón de tu audiencia.</p>
                </div>
                <div class="card-2 img-sinpad web-img">
                    <img class="card black" alt="estrategiadigital" src={nereaFotovideo}/>
                </div>
            </div>
            <div class="div-card">
                <div class="card-1">
                    <h1 class='imagina mobile-img'>I</h1>
                    <p class='mobile-img'>magina un equipo que ve más allá de las fórmulas habituales, que desafía los límites predecibles y se adentra en territorios inexplorados para tu marca. En Khwa, no nos conformamos con potenciar marcas, las llevamos más allá de lo esperado. Aquí, la empatía no es solo una palabra de moda, es la base de cada interacción. Creemos en construir relaciones sólidas basadas en confianza mutua. En Khwa, cultivamos relaciones duraderas que trascienden los límites digitales.</p>
                    <p class='web-img'>Imagina un equipo que ve más allá de las fórmulas habituales, que desafía los límites predecibles y se adentra en territorios inexplorados para tu marca. En Khwa, no nos conformamos con potenciar marcas, las llevamos más allá de lo esperado. Aquí, la empatía no es solo una palabra de moda, es la base de cada interacción. Creemos en construir relaciones sólidas basadas en confianza mutua. En Khwa, cultivamos relaciones duraderas que trascienden los límites digitales.</p>
                </div>
                <div class="card-2 img-sinpad">
                    <img class="card black" alt="estrategiadigital" src={comidas}/>
                </div>
            </div>
        </div>
        <h1 class="titulo-otros">EN KHWA, SOMOS ESPECIALISTAS EN:</h1>
        <div class="otros-servicios">
            <div class="tarjeta-div card">
                <h1>ESTRATEGIA DIGITAL</h1>
            </div>
            <div class="tarjeta-div card color-bronce">
                <h1>IDENTIDAD DE MARCA</h1>
                <a class="btn btn-primary btn-mas" href="#identidad" role="button">Ver más</a>
            </div> 
            <div class="tarjeta-div card color-lila">
                <h1>REDES SOCIALES</h1>
            </div>
            <div class="tarjeta-div card color-bronce">
                <h1>MARKETING DIGITAL</h1>
            </div> 
            <div class="tarjeta-div card">
                <h1>SITIO WEB</h1>
            </div>
            <div class="tarjeta-div card color-lila">
                <h1>DISEÑO GRÁFICO</h1>
            </div>
            <div class="tarjeta-div card color-yellow">
                <h2>VIDEOS PUBLICITARIOS & CORPORATIVOS</h2>
            </div>
            <div class="tarjeta-div card color-bronce">
                <h2>ANIMACIONES</h2>
            </div>
            <div class="tarjeta-div card color-yellow">
                <h2>ANÁLISIS DE DATOS</h2>
            </div>
            <div class="tarjeta-div card color-lila">
                <h1>PRODUCCIONES AUDIOVISUALES & FOTOGRAFÍA</h1>
            </div>
        </div>
    </div>
    )
}

export default Servicios; 