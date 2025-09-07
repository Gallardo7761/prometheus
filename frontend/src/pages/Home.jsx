import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Row className="justify-content-center w-100">
                <Col xs={12} className="text-center">
                    <h1 className='display-1'>PrometheUS</h1>
                </Col>
            </Row>
            <Row className="justify-content-center w-100 mt-3">
                <Col xs={12} md={4}>
                    <div className='d-flex gap-2'>
                        <Form.Control type="text" placeholder="¿Qué quieres buscar?" className="shadow-sm border border-danger text-center rounded-0" />
                        <Button className='btn-danger rounded-0 shadow-sm border border-danger'>
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center w-100 mt-5">
                <Col xs={12} className="text-center text-muted">
                    <h2>Boletín de noticias</h2>
                </Col>
                <Col xs={12} md={8} className="text-center text-muted">
                    <div className='d-flex gap-3 border rounded-0 p-3'>
                        <Card>
                            <Card.Body>
                                <Card.Title>Artículo 1</Card.Title>
                                <Card.Text>
                                    Resumen del artículo 1...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Artículo 2</Card.Title>
                                <Card.Text>
                                    Resumen del artículo 2...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Artículo 3</Card.Title>
                                <Card.Text>
                                    Resumen del artículo 3...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;