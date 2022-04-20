import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'


function Contact() {
    return (
        <div className='contact-container'>
            <Form>

                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label column="lg" className='contact-title'> Contact us </Form.Label>
                    </Form.Group>
                </Row>

                <Form.Group className='fullname'>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="firstname" controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group as={Col} className="surename" controlId="sureName">
                            <Form.Label>Surename</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Row>

                </Form.Group>

                <Row className="mb-3">
                    <Form.Group className="email" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>

                        <Col sm={12}>
                            <Form.Control type="email" />
                        </Col>

                    </Form.Group>
                </Row>
                <Form.Group className="message" controlId="clientMessage">
                    <Form.Label>Leave us a message</Form.Label>

                    <Col sm={12}>
                        <Form.Control as="textarea" rows={6} spellCheck='true' />
                    </Col>

                </Form.Group>

                <Button variant="outline-secondary" type="submit" className="contactButton">
                    Click to submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact      