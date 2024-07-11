import React from 'react'
import './styles/About.css'
const aboutSections = {
    // "backgroundColor": "black",
    // "color": "white",
    // "padding": "50px",
    // "margin": "30px"

}
const About = () => {
    return (
        <div>
            {/* <section style={aboutSections}
            className='about-sections who-we-are container'>
                <h2 className=''>Who we are</h2>
                <p>BarterUp is an innovative web-based platform designed to facilitate the exchange of goods and services without the use of money. Our mission is to create a vibrant, community-driven marketplace where users can trade items and skills, fostering a sense of community and promoting sustainable living.</p>
            </section> */}
            <section style={aboutSections}
                className='about-sections our-vision'>
                    <div className='row justify-content-md-center'>
                <h2 className='text-center p-3'>Our Vision</h2>
                <p className='text-center col col-lg-8 pb-3'>At BarterUp, we envision a world where everyone has access to the resources they need through the power of bartering. We aim to reduce waste, save money, and build stronger communities by connecting people who have something to offer with those who need it.</p>
                </div>
            </section>
            <section style={aboutSections}
                className='about-sections our-mission'>
                    <div className='row justify-content-md-center'>
                <h2 className='text-center p-3'>Our Mission</h2>
                <p className='text-center col col-lg-8 pb-3'>Our mission is to empower individuals and communities to engage in sustainable and mutually beneficial exchanges. By providing a user-friendly platform for bartering, we aim to support local economies, reduce environmental impact, and create a more equitable system of trade.</p>
                </div>
            </section>
            <section style={aboutSections} className='about-sections what-we-offer'>
                <div className='container'>
                    <h2 className='text-center mb-3'>What we Offer</h2>
                    <div className='row justify-content-md-center'>
                        <div className='col col-lg-4 text-center m-2'>
                            <h3>Economic Savings</h3>
                            <p>Bartering allows you to save money by trading items or services you have for those you need, without any cash transactions.</p>
                        </div>
                        <div className='col col-lg-4 text-center m-2'>
                            <h3>Diverse Categories</h3>
                            <p>From electronics and clothing to professional services and handmade crafts, BarterUp offers a wide range of categories for users to explore.</p>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col col-lg-4 text-center m-2'>
                            <h3>User-Friendly Interface</h3>
                            <p>Our platform is designed with simplicity in mind, making it easy for users of all ages and tech-savviness to navigate and participate in bartering.</p>
                        </div>
                        <div className='col col-lg-4 text-center'>
                            <h3>Community Focused</h3>
                            <p>We prioritize building a community of users who support and trust each other, fostering long-term relationships and continuous exchanges.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={aboutSections} className='about-sections our-story'>
                <div className='row justify-content-md-center'>
                <h2 className='text-center p-3'>Our Story</h2>
                <p className='text-center col col-lg-8 pb-3'>BarterUp was founded by a group of environmentally-conscious entrepreneurs who recognized the potential of bartering to reduce waste and promote sustainable living. Inspired by traditional bartering systems and modern technology, we developed a platform that brings these two worlds together, making bartering accessible and efficient for everyone.</p>
                </div>
            </section>


            <section style={aboutSections} className='about-sections'>
                <div className='container'>
                    <h2>Our Team</h2>
                    <p>Our dedicated team is passionate about sustainability, technology, and community-building. We work tirelessly to improve the platform, ensuring that BarterUp remains a safe, effective, and enjoyable place for all users to trade their goods and services.</p>
                    <div className='row'>
                        <div className='col'>

                        </div>
                        <div className='col'>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
