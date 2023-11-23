import './disenoGrafico.css';
import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

const SocialMediaCard = ({ image, title }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleOpen = () => setShowModal(true);

    return (
        <>
            <div className="card-diseno">
                <div className='div-diseno'>
                    <h1>{title}</h1>
                    <button className="btn btn-primary font-secondary color-lila" variant="primary" onClick={handleOpen}> Ver más </button>
                    <Modal show={showModal} onHide={handleClose} className="custom-modal">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5>Te compartimos una lista de lo que se puede diseñar:</h5>
                            <ul>
                                <li class="list-style">Diseño de menú</li>
                                <li class="list-style">Diseño de catálogo</li>
                                <li class="list-style">Diseño de equiquetas</li>
                                <li class="list-style">Diseño de lona</li>
                                <li class="list-style">Diseño de flyer</li>
                                <li class="list-style">Diseño de tarjetas</li>
                                <li class="list-style">Diseño de hoja membretada</li>
                                <li class="list-style">Diseño de carpeta</li>
                                <li class="list-style">Diseño de caja</li>
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <a href='#' variant="primary" onClick={handleClose} className="btn btn-primary font-secondary color-lila">
                            Quiero una cotización!
                            </a>
                        </Modal.Footer>
                    </Modal>
                </div>
                <img src={image} alt={title} />
            </div>
        </>
    );
};

export default SocialMediaCard;