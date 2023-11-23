import './identidad.css'
import identPreg1 from '../../assets/identPreg1.png';
import identPreg2 from '../../assets/identPreg2.png';
import identPreg3 from '../../assets/identPreg3.png';
import identPreg4 from '../../assets/identPreg4.png';
import brand from '../../assets/brand.gif';

const Identidad = () => {
    return(
        <div id="identidad" class="identidad">
            <div>
                <h1><mark>Identidad de Marca . Branding . Rebranding</mark></h1>
            </div>
            <div class="div-father-ident">
                <div class="div-one">
                    <div class="div-one-txt">
                        <h3>. Tu marca merece destacar entre la multitud .</h3>
                        <h5>En KHWA te ayudamos a construir una identidad que conecte con tu público.</h5>
                        <h5>¡Queremos que se enamoren de tu marca!</h5>
                    </div>
                    <div class="div-preg">
                        <div class="preguntas">
                            <div class="img1-preg"> <img src={identPreg1} alt='identidaddemarca'/> </div>
                            <div class="img2-preg"> <img src={identPreg2} alt='branding'/> </div>
                            <div class="img3-preg"> <img src={identPreg3} alt='rebranding'/> </div>
                            <div class="img4-preg"> <img src={identPreg4} alt='logo'/> </div> 
                        </div>
                        <div class="div-preg-txt">
                            <h5>Hay algo en tu marca que te hace <strong>ESPECIAL</strong> y te hará <strong>DESTACAR</strong>. Te proponemos que lo encontremos <strong>JUNTOS</strong> y lo transformemos en la <strong>ESENCIA</strong> de tu marca, haremos que te identifiquen al instante!</h5>
                        </div>
                    </div>
                </div>
                <div class="div_two">
                    <div class="plan">
                        <h2>Basic Khwa</h2>
                        <div class="plan-style">
                            <div>
                                <p class='font-secondary'>Especial para nuevos emprendedores que desean destacar desde el comienzo.También para los que quieren una nueva mirada fresca para su marca (rebranding).</p>
                                <h4>Incluye:</h4>
                                <ul class="list-style font-secondary">
                                    <li className='list-style'>Diseño de logo principal, isologo e icono.</li>
                                    <li className='list-style'>Paleta de color.</li>
                                    <li className='list-style'>Tipografías.</li>
                                    <li className='list-style'>Brandboard.</li>
                                </ul>
                                <h4>¡De regalo!</h4>
                                <p class='font-secondary'>(Opción a escoger: 1 opción)</p>
                                <ul class="font-secondary">
                                    <li className='list-style'>Foto de perfil de Redes Sociales.</li>
                                    <li className='list-style'>Diseño de portada de facebook.</li>
                                    <li className='list-style'>Diseño de tarjetas.</li>
                                    <li className='list-style'>Diseño de hoja membretada.</li>
                                </ul>                     
                            </div>
                        </div>
                        <a class="btn btn-primary font-secondary color-lila" href="#" role="button">Quiero más información</a> 
                    </div>
                    <div class="plan-img">
                        <img src={brand} alt='img-brand'/>
                        <div class="personalizado">
                            <h4>¿Quieres algo más personalizado?</h4>
                            <a class="btn btn-primary font-secondary color-lila" href="#" role="button">Contactános</a>
                        </div>
                    </div>
                    <div class="plan">
                        <h2>Premium Khwa</h2>
                        <div class="plan-style">
                            <div>
                                <p class='font-secondary'>¿Querés llevar tu marca al siguiente nivel? Este plan esta especialmente diseñado para vos.</p>
                                <h4>Incluye:</h4>
                                    <ul class="list-style font-secondary">
                                    <li className='list-style'>Diseño de logo principal, isologo e icono.</li>
                                    <li className='list-style'>Paleta de color.</li>
                                    <li className='list-style'>Tipografías.</li>
                                    <li className='list-style'>Elementos gráficos.</li>
                                    <li className='list-style'>Brandboard.</li>
                                    <li className='list-style'>Brandbook.</li>
                                    <li className='list-style'>Gif animado del logo.</li>
                                    <li className='list-style'>Reel para anuncio (1).</li>
                                </ul>
                                <h4>¡De regalo!</h4> 
                                <p class='font-secondary'>(Opciones a escoger: 2 opciones)</p>
                                <ul class="list-style font-secondary">
                                    <li className='list-style'>Foto de perfil de Redes Sociales.</li>
                                    <li className='list-style'>Diseño de portada de facebook.</li>
                                    <li className='list-style'>Diseño de tarjetas.</li>
                                    <li className='list-style'>Diseño de hoja membretada.</li>
                                </ul>                     
                            </div>
                        </div>
                        <a class="btn btn-primary font-secondary color-lila" href="#" role="button">Quiero más información</a>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Identidad