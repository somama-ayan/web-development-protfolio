import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Button from 'react-bootstrap/esm/Button'
// import coverImage from '../pages/images/barterupCover.png'
// import cover from '../pages/images/trade.jpg'
// import bg from '../pages/images/bg6.jpg'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import './styles/Home.css'
import Products from './Products'


import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Phone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/api/products")
            .then((res) => {
                console.log(res)
                const products5 = res.data.slice(0, 4)
                setProducts(products5)
                console.log(products)
            }).catch((err) => {
                console.log("axios error", err.message)
            })
    }, [])


    return (
        <div>
            <section id="hero">
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='mainhead2 text-muted'>
                                Trade What You Have for What You Need
                            </h2>
                            <h1 className='mainhead1'>
                                Barter UP
                            </h1>
                            <p className='mainpara1 text-muted'>
                                Join our community to <br /> exchange items effortlessly <br />and find what you're looking for.
                            </p>
                            <Link to={'/register'}>
                                <button className='btn btn-outline-dark'>
                                    Get Started
                                </button>
                            </Link>
                            {/* <div className='col'>
                                <img src={bg}></img>
                            </div> */}
                        </div>
                    </div>

                </div>
            </section>{/* // end fo main section */}
            <section>
                <h2 className='text-center ProductSection-head2'>Products</h2>
                <div className='container'>
                    <div className='row'>
                        {
                            products.map((p) => {
                                return (<div className='col-md-3 d-flex justify-content-center'>
                                    <Card className='card-element-home p-2'>
                                        <Link className='text-decoration-none' to={'/Products/'} >
                                            <Card.Img
                                                className='Product-image-home img img-thumbnail rounded'
                                                src={`http://localhost:3001/uploadImages/products/${p.ProductImage}`}
                                                alt={p.ProductName}
                                            />
                                            <Card.Body>
                                                <Card.Title className='text-dark'>{p.ProductName}</Card.Title>
                                                <Card.Text>{p.ProductCategory}</Card.Text>
                                                <Card.Text className='description-home text-dark pb-2'>{p.ProductDescription}</Card.Text>
                                                <Button variant='btn btn-outline-dark form-control'>WhatsApp</Button>
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </section> {/*end of second section */}
            {/* about section what we offer 3rd */}

            <section className='about-sections what-we-offer'>
                <div className='container'>
                    <h2 className='text-center sectionHome-what-we-offer mb-3'>What we Offer</h2>
                    <Link className='text-decoration-none' to={'/about'}>
                    <div className='row justify-content-md-center'>
                        <div className='col col-lg-4 text-center m-2'>
                            <h4 className='bg-dark text-light p-2'>Economic Savings</h4>
                            <p className='text-dark'>Bartering allows you to save money by trading items or services you have for those you need, without any cash transactions.</p>
                        </div>
                        <div className='col col-lg-4 text-center m-2'>
                            <h4 className='bg-dark text-light p-2'>Diverse Categories</h4>
                            <p className='text-dark'>From electronics and clothing to professional services and handmade crafts, BarterUp offers a wide range of categories for users to explore.</p>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col col-lg-4 text-center m-2'>
                            <h4 className='bg-dark text-light p-2'>User-Friendly Interface</h4>
                            <p className='text-dark'>Our platform is designed with simplicity in mind, making it easy for users of all ages and tech-savviness to navigate and participate in bartering.</p>
                        </div>
                        <div className='col col-lg-4 text-center m-2'>
                            <h4 className='bg-dark text-light p-2'>Community Focused</h4>
                            <p className='text-dark'>We prioritize building a community of users who support and trust each other, fostering long-term relationships and continuous exchanges.</p>
                        </div>
                    </div>
                        </Link>
                </div>
            </section>


            <section className='contactHome-section'>
                <h2 class="text-center ContactSection-head2">Get in Touch with Us</h2>
                <Link className='text-decoration-none' to={'/contact'}>
                    <div className='container d-flex justify-content-center align-items-center'>
                        <div className='col-md-6'>
                            <form className='form' autoComplete='on'>
                                <div className='input-field d-flex align-items-center'>
                                    <PersonRoundedIcon className='me-2' />
                                    <input
                                        className='form-control'
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Your Name'

                                    />
                                </div>
                                <div className='input-field d-flex align-items-center'>
                                    <Phone className='me-2' />
                                    <input
                                        className='form-control'
                                        type='number'
                                        name='phone'
                                        id='phone'
                                        placeholder="Your WhatsApp +923"

                                    />
                                </div>

                                <div className='input-field d-flex align-items-center'>
                                    <EmailIcon className='me-2' />
                                    <input
                                        className='form-control'
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='@gmail.com'

                                    />

                                </div>

                                <div className='input-field d-flex align-items-center'>
                                    <MessageIcon className='me-2' />
                                    <textarea
                                        className='form-control'
                                        type='text'
                                        name='address'
                                        id='address'
                                        placeholder='Enter Your message'

                                    />

                                </div>

                                <div className='input-field'>
                                    <button className='btn btn-outline-dark form-control' type='submit'>
                                        Contact Us
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Link>
            </section>
        </div>// end of parent container of whole component
    )
}

export default Home
