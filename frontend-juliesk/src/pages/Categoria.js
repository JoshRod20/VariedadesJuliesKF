import React, { useState } from 'react';
import { Form, Row, Col, Container, FloatingLabel, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/App.css';

function Categoria({ Rol }) {

    //Validacion y limite de lingitud de caracteres para la categoria------------------------------------------
    const handleNombreChange = (e) => {
      // Validar que solo se ingresen letras y espacios
      const regex = /^[A-Za-z\s]+$/;
  
          // Validar longitud máxima
        if (regex.test(e.target.value) || e.target.value === '') {
        setNombre(e.target.value.slice(0, 30)); // Limitar la longitud a 20 caracteres
      }
    };

  // Crear un estado para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');


  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
        
        // Validación individual de campos
        if (!nombre) {
          setError('Por favor, ingrese el nombre de la categoria.');
          return;
        }

    // Crear un objeto con los datos del formulario
    const formData = {
      nombre,
    };

    try {
      // Realizar una solicitud HTTP al backend para enviar los datos
      const response = await fetch('http://localhost:5000/crud/createCategoria', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // El registro se creó exitosamente
        alert('Registro exitoso');
        // Reiniciar los campos del formulario
        setNombre('');
      } else {
        alert('Error al registrar la categoria');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud al servidor');
    }
  };

  return(
    <div>
      <Header Rol={ Rol }/>
      
      <Container>
        <Card className="margen-contenedor">
          <Card.Body>
            <Card.Title>Registro de Categoria</Card.Title>
            <Form className="mt-3" onSubmit={handleSubmit}>
              <Row className="g-3">

                <Col sm="6" md="6" lg="12">
                  <FloatingLabel controlId="nombre" label="Nombre">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el nombre"
                      value={nombre}
                      onChange={handleNombreChange}
                    />
                  </FloatingLabel>
                  {error && error.includes('nombre') && <div className="text-danger">{error}</div>}
                </Col>

              </Row>
              <div className="center-button">
                <Button variant="primary" type="submit" className="mt-3" size="lg">
                  Registrar
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>

    </div>
  );
}

export default Categoria;