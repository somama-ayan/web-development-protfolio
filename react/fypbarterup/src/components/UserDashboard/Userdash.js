import React from 'react'


import Up from './Up'
import Uproductupload from './Uproductupload/Uproductupload'
const Userdash = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 bg-dark'>
                    <Up />
                </div>
                <div className='col-md-9'>
                    <Uproductupload />
                </div>
            </div>
        </div>
    )
}

export default Userdash
