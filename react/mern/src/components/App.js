import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Home';
import About from './About';
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import Products from './Products';
import Product from './Product';
import Error from './Error';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {NotificationContainer} from 'react-notifications';


const App = () => {
    return (
        <Router>
            <NotificationContainer />
            <Navbar expand="lg" className="navbar navbar-dark bg-dark">
                <Container>
                    <Nav className='me-auto'>
                        <Link className='nav-link'to="/home">Home</Link>
                        <Link className='nav-link'to="/about">About</Link>
                        <Link className='nav-link'to="/products">Products</Link>
                        <Link className='nav-link'to="/login">Login</Link>
                        <Link className='nav-link'to="/logout">Logout</Link>
                        <Link className='nav-link'to="/register">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='container'>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                <footer style={{height: "300px"}}>

                </footer>
            </div>
        </Router>
    )
}

export default App
