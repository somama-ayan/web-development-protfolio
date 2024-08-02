import React from 'react'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Phone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
const Contact = () => {
    return (
        <section className='register-section'>
      <h1 className='reghead1 text-center'>Contact Us</h1>
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
    </section>
    )
}

export default Contact
