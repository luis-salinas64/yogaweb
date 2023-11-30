import React from 'react';
import './container.css';

const Texto = ({ children, ...props }) => (
    <div className="textStyle" {...props}>
        {children}
        <p>Hola, soy Kari.
            Hace unos años estoy en la búsqueda de saber quién soy y
            cual era mi proposito en este plano.
            En el camino, me encontre con un montón de herramientas y aprendizajes
            que me ayudaron a conocerme, a <strong>valorarme!</strong> y entre otras muchas cosas, a
            <strong> animarme! </strong>
            Hoy soy <strong>Profesora y Maestra de Yoga</strong> y me gustaria compartir
            mis enseñanzas mientras sigo aprendiendo.
            Mi propósito como profe de Yoga es darte las herramientas para que vos también
            aprendas a <strong>conocerte, valorarte y animarte </strong>a este cambio.
            Quiero enseñarte a buscar <strong>el bienestar.</strong>
            Que seas tu propia <strong>medicina</strong>.</p>
    </div>
);

export default Texto;