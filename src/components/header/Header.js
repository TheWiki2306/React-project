import React from 'react'
import './header.css';
import CTA from './CTA';
import Mine from '../../images/olu-1.jpg';
import HeaderSocials from './HeaderSocials';


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello i'm </h5>
                <h1>Olusakin Olusegun</h1>
                <h5 className='text-light'>Front End Engineer</h5>
                <CTA />

                <HeaderSocials />

                <div className="circle-container">
                    <div className="circle one">
                        <div className="tiny-circle"></div>
                    </div>
                    <div className="circle two">
                        <div className="tiny-circle"></div>
                    </div>
                    <div className="circle three">
                        <div className="tiny-circle"></div>
                    </div>
                    <div className="circle four">
                        <div className="tiny-circle"></div>
                    </div>
                </div>
                
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
