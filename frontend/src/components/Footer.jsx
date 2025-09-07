import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='sticky-bottom'>
            <footer className="py-3 my-4">
                <Nav className="justify-content-center border-bottom pb-3 mb-3">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" className="text-body-secondary">
                            Inicio
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <p className="text-center text-body-secondary">© 2025 Universidad de Sevilla</p>
            </footer>
        </Container>
    );
};

export default Footer;
