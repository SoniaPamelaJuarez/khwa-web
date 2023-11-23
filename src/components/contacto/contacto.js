import '../disenoGrafico/disenoGrafico.css';
import './contacto.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactUs from '../../assets/contactUs.mp4';
import CarouselComponent from '../disenoGrafico/carrousel';

const Result = () =>{
    return(
        <p className='enviado-txt'>Tu mensaje fue enviado correctamente.Te contactaremos a la brevedad, ¡Muchas gracias por tu consulta!</p>
    )
}

const ContactUs = () => {
    const form = useRef();
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('formulario_contacto_web', 'template_u99l12o', form.current, 'rJt8LArHTBU69AeNE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
    showResult(true)
    };

    //hide result
    setTimeout(() =>{
        showResult(false)
    },5000);

    return (
        <div id='contacto' className='contacto'>
            <video className="video-background" autoPlay loop muted>
                <source src={contactUs} type="video/mp4" alt='agencia digital'/>
            </video>
            <div className='bloque1 pad-h'>
                <div className='historia history-contact'>
                    <h1>. ¿Cuál es TU HISTORIA? .</h1>
                    <h1>. What's YOUR HISTORY? .</h1>
                </div>
                <CarouselComponent />
            </div>
            <form className='form_father' ref={form} onSubmit={sendEmail}>
                <div className='form_s_2'>
                    <div className='form_filas'>
                        <h2>FORMULARIO DE CONTACTO</h2>
                        <h5>Nombre</h5>
                        <input type="text" name="from_name" placeholder=' Campo obligatorio' required />
                    </div>
                    <div className='form_filas'>
                        <h5>E-mail</h5>
                        <input type="email" name="email" placeholder=' Campo obligatorio' required />
                    </div>
                    <div className='form_filas'>
                        <h5>Teléfono</h5>
                        <input type="text" name="phone" placeholder=' Campo obligatorio' required />
                    </div>
                    <div className='form_filas'>
                        <h5>Mensaje</h5>
                        <textarea rows={8} name="message" placeholder=' Escribe tu duda o consulta' required/>
                    </div>
                    <button class="btn btn-primary font-secondary color-lila btn-enviar" type="submit" value="Send">Enviar</button>
                    <div className='row'>{result ? <Result /> : null}</div>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;