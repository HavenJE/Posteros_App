// These two imports are from Email.js 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form, Col, Row } from 'react-bootstrap'
import ContactUs1 from '../assets/ContactUs_images/ContactUs1.jpg'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm
            ('service_ipgfl01',
                'template_uzzhzdu', // Get that from Default Template, Settings tab 
                form.current,
                '5nSNYxgQFGwHh-RCo') // Get that from Account tab  
            .then((result) => {
                e.target.reset();
                console.log(result.text);
                console.log("message sent")

            }, (error) => {
                console.log(error.text);
            });
    };

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
                            <Form ref={form} onSubmit={sendEmail} >
                                <Row className="mb-3">
                                    <Form.Group>
                                        <Form.Label column="lg" className='contact-title'> Contact Posteros </Form.Label>
                                    </Form.Group>
                                </Row>

                                <Form.Group className='fullname'>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} className="firstname" >
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="surname"  >
                                            <Form.Label>Surename</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="surname"
                                                name="surname"
                                            />
                                        </Form.Group>
                                    </Row>

                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} className="email" >
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="email"
                                            name="email"
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} className="phone" >
                                        <Form.Label>Your Phone </Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="phone"
                                            name="phone"
                                        />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="message" >
                                    <Form.Label>How can we help you?</Form.Label>

                                    <Col sm={12}>
                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            spellCheck='true'
                                            id="message"
                                            name="message"
                                        />
                                    </Col>

                                </Form.Group>
                                <Button variant="outline-secondary" type="submit" className="contactButton" value='Send'>
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

// action='https://haven.eldebaque@gmail.com' method='POST'