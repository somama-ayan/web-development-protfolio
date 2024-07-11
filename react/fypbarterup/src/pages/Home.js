import React from 'react'
// import Button from 'react-bootstrap/esm/Button'
// import coverImage from '../pages/images/barterupCover.png'
// import cover from '../pages/images/trade.jpg'
// import bg from '../pages/images/bg6.jpg'
import './styles/Home.css'

const Home = () => {


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
                            <button className='btn btn-outline-dark'>
                                Get Started
                            </button>
                            {/* <div className='col'>
                                <img src={bg}></img>
                            </div> */}
                        </div>
                    </div>

                </div>
            </section>{/* // end fo main section */}
            <section>
                        
            </section> {/*end of second section */}
        </div>// end of parent container of whole component 
    )
}

export default Home
