import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css';

function About({ Rol }) {

  useEffect(() => {
    // Cambia el color del texto del párrafo a negro
    const parrafo = document.querySelector('p');
    if (parrafo) {
      parrafo.style.color = 'black';
    }
  }, []); // El segundo parámetro [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <Header Rol={Rol} />

      <Container className="margen-contenedor">
        <Link to="/Inicio">Ir a inicio</Link>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        >
          <p style={{ color: 'black' }}>
          "En nuestra tienda, nos especializamos en ofrecer la mejor selección de ropa para bebés.  
           Desde adorables conjuntos y suaves mamelucos hasta cómodos pijamas y accesorios encantadores, tenemos todo lo que necesitas para vestir a tu pequeño con estilo y comodidad. 
           Nuestra pasión por los bebés se refleja en cada prenda que ofrecemos, asegurando calidad y diseños adorables. Ven y descubre nuestras opciones de moda para bebés, ¡te encantarán!"
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;