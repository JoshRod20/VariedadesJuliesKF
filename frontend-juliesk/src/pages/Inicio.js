import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css';

function About({ Rol }) {

  useEffect(() => {
    // Cambia el color del texto del párrafo a blanco
    const parrafo = document.querySelector('p');
    if (parrafo) {
      parrafo.style.color = 'black';
    }
  }, []); // El segundo parámetro [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <Header Rol={Rol} />

      <Container className="margen-contenedor">
        <Link to="/About">Ir a Informacion</Link>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        >
          <p style={{ color: 'black' }}>
           Variedades juliesk Ubicado En el Costado sur del parque Central
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;