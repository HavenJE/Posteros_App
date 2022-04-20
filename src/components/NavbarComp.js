
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { v4 } from 'uuid'
import Home from './Home';
import Contact from './Contact';


function NavbarComp() {
    return (
        <section className="container-fluid" >
            <div key={v4()} className="row align-items-center">
                <Router>
                    <Navbar bg='dark' variant="dark" expand="lg" sticky="top" >
                        <Container className='justify-content-center'>
                            <div className='navbar-tabs' >
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse
                                    id="basic-navbar-nav"
                                    style={{ fontSize: '18px' }}>
                                    <Nav className="mx-auto-d-grid " >
                                        <Nav.Link style={{ color: 'rgb(228, 238, 238)', fontWeight: '900' }} as={Link} to={'/'}>Home</Nav.Link>
                                        <Nav.Link style={{ color: 'rgb(228, 238, 238)', fontWeight: '900' }} as={Link} to={'/About'}>About Us</Nav.Link>
                                        <Nav.Link style={{ color: 'rgb(228, 238, 238)', fontWeight: '900' }} as={Link} to={'/WhatWeDo'}>What We Do</Nav.Link>
                                        <Nav.Link style={{ color: 'rgb(228, 238, 238)', fontWeight: '900' }} as={Link} to={'/HowWeDoIt'}>How We Do It</Nav.Link>
                                        <Nav.Link style={{ color: 'rgb(228, 238, 238)', fontWeight: '900' }} as={Link} to={'/Contact'}>Contact Us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>

                    </Navbar>

                    <div key={v4()}>
                        <Routes>
                            <Route exact path="/Home"  element={<Home />}/>
                            <Route exact path="/Contact" element={<Contact />} />
                        </Routes>
                    </div>

                </Router>
            </div>
        </section>
    )
}

export default NavbarComp   