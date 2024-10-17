import React from 'react'
import CV from '../../images/Olusegun OLUSAKIN - Updated CV 2024 (4).pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download Cv</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA;
