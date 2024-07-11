import React from 'react'
import { Link } from 'react-router-dom'

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import CopyrightIcon from '@mui/icons-material/Copyright';

const Footernav = () => {
    const footColor = {
        "backgroundColor": "rgba(16, 64, 79, 1)",
        "color": "white"
    }
    return (

        <div>
            <footer style={footColor}>
                <div className='container p-4'>
                    <div className='row justify-content-md-center'>
                        <div className='col col-lg-4'>
                            <h3 className='text-center'>About Us</h3>
                            <p className='text-center'>BarterUp is an innovative web-based platform designed to facilitate the exchange of goods and services without the use of money.</p>
                        </div>
                        <div className='col col-lg-4'>
                                <h3 className='text-center'>Quick Links</h3>
                                <ul className='list-unstyled text-center m-2'>
                                    <li className='p-1'>
                                        <Link
                                            className='text-decoration-none m-2 text-light'
                                            to='/home'>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='p-1'>
                                        <Link
                                            className='text-decoration-none m-2 text-light'
                                            to='/products'
                                        >
                                            Products
                                        </Link>
                                    </li>
                                    <li className='p-1'>
                                        <Link
                                            className='text-decoration-none m-2 text-light'
                                            to='/about'
                                        >
                                            About us
                                        </Link>
                                    </li>
                                </ul>
                        </div>
                        <div className='col col-lg-4 text-center'>
                            <h3 className='mb-2'>Get In Touch</h3>
                            <FacebookIcon className='m-1' />
                            <WhatsAppIcon className='m-1' />
                            <InstagramIcon className='m-1' />
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className='text-light text-center p-3'>
                        <CopyrightIcon className='me-1' />
                        2024 All Rights Reserved
                    </h6>
                </div>
            </footer>
        </div>
    )
}

export default Footernav
