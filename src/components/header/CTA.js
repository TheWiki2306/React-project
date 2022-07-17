import React from 'react'
import CV from '../../images/cv.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download Cv</a>
            <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
        </div>
    )
}

export default CTA;
