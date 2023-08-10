import React from 'react'
import './header.css';
import CTA from './CTA';
import Mine from '../../images/mine.jpg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello i'm </h5>
                <h1>Olusakin Olusegun</h1>
                <h5 className='text-light'>Front-end developer</h5>
                <CTA />

                <HeaderSocials />
                <div className="pic">
                    <img src={Mine} alt="frame" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
