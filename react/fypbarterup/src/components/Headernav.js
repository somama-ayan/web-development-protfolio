import React from 'react'
import { Link } from 'react-router-dom'
// import {Navbar} from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const headColor = {
    "backgroundColor": "rgba(16, 64, 79, 1)"
};

const Headernav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="" style={headColor}>
            <Container>
                <Navbar.Brand className='text-light' href="/home">BarterUp</Navbar.Brand>
                <Navbar.Toggle className='text-light' variant='outline-dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='justify-content-center flex-grow-1 pe-3'>
                        <Link
                            className='text-decoration-none m-2 text-light'
                            to='/home'
                        >
                            Home
                        </Link>
                        <Link
                            className='text-decoration-none m-2 text-light'
                            to='/products'
                        >
                            Products
                        </Link>
                        <Link
                            className='text-decoration-none m-2 text-light'
                            to='/about'
                        >
                            About us
                        </Link>
                        <Link
                            className='text-decoration-none m-2 text-light'
                            to='/contact'
                        >
                            Contact us
                        </Link>
                    </Nav>
                    <Form>
                        <Button variant='outline-dark' className='m-2 text-light'>
                            <Link className='text-decoration-none text-light' to='/register'>Register</Link>
                        </Button>
                        <Button variant='outline-dark' className='m-2 text-light'>
                            <Link className='text-decoration-none text-light' to='/login'>Log In</Link>
                        </Button>
                        <Button variant='outline-dark' className='m-2 text-light'>
                            <Link className='text-decoration-none text-light' to='/logout'>Log Out</Link>
                        </Button>
                        <Button variant='outline-dark' className='m-2 text-light'>
                            <Link className='text-decoration-none text-light' to='/userdash'>Dashboard</Link>
                        </Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default Headernav
