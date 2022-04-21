import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import ContactUs1 from '../assets/ContactUs_images/ContactUs1.jpg'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='row'>

                <div className='col-lg-4 col-md-5'>
                    <div className='container-fluid' >

                        <div className='contactImage'>
                            <img src={ContactUs1} alt='' className='img-fluid' width={310} height={700} />
                        </div>

                    </div>
                </div>

                <div className='col-lg-7 col-md-8'>

                    <div className='container-fluid'>

                        <div className='ContactForm'>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label column="lg" className='contact-title'> Contact Posteros </Form.Label>
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

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact      