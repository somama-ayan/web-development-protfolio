import 'react-notifications/lib/notifications.css';
import React from 'react'
import Headernav from './Headernav'
import Footernav from './Footernav'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Product from '../pages/Product'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Logout from '../pages/Logout';
import Error from '../pages/Error'
import Userdash from './UserDashboard/Userdash';

import { NotificationContainer } from 'react-notifications';
import Contact from '../pages/Contact';


const App = () => {
    return (
        <div>
            <Router>
                <NotificationContainer />
                <Headernav />
                
                <Routes>
                    <Route path='/'element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/product/:id'element={<Product />} />
                    <Route path='/about'element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />}/>
                    <Route path='/logout' element={<Logout />}/>
                    <Route path='*' element={<Error />}/>
                    <Route path='/userdash/' element={<Userdash />} />
                </Routes>
                { <Footernav /> }
            </Router>
        </div>
    )
}

export default App
