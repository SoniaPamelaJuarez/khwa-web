import React from 'react';
import './socialMedia.css';
import SocialMediaCard from './socialMediaCard';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import sm1 from '../../assets/sm1.png'

const SocialMediaPage = () => {
    return (
        <div id="social" className="social-media-page">
            <h1><mark>Redes Sociales . Social Media</mark></h1>
            <h5>Ya tienes tu <a href='#identidad' data-tooltip-id="my-tooltip" data-tooltip-content="¿Qué es una Identidad de Marca?">Identidad de Marca</a> lista para arrancar y quieres comenzar a publicar contenido en tus RRSS pero no tienes mucha idea de <mark className='mark-verde'>¿CÓMO?</mark>, o simplemente quieres un <mark className='mark-verde'>cambio renovador</mark> para tu feed? Entonces estas en el <mark className='mark-verde'>lugar correcto</mark>, estos planes son ideales para tí. No dudes en contactarnos para que tengamos una reunión y hablemos sobre tus objetivos y espectativas!
            <Tooltip id='my-tooltip'/>
            </h5> 
            <div className="cards-social">
                <SocialMediaCard
                image= {sm1}
                title="Contenido para RRSS"
                description="Creación de contenido, incluye:"
                services={[
                    'Posteos estáticos',
                    'Reels/Videos',
                    'Foto de perfil',
                    'Banner si corresponde',
                    'Portada para historias destacadas'
                ]}
                />
                <SocialMediaCard
                image={sm1}
                title="Manejo de RRSS"
                services={[
                    'Creación de contenido para redes sociales',
                    'Gestión de redes sociales',
                    'Estrategia de contenido',
                    'Publicidad en redes sociales',
                    'Análisis de métricas',
                ]}
                />
            </div>
        <h3>Nuestros planes son personalizados porque nos fijamos en los objetivos y necesidades de nuestros clientes. Sabemos que es un trabajo en equipo, queremos que funcione y crezcamos juntos</h3>
        </div>
    );
};

export default SocialMediaPage;