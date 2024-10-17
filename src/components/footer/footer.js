import React from 'react';
import './footer.css';
import { BsTwitter } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'


const Footer = () => {
    return (

        <footer>
            <a href="#" className='footer__logo'>Olusakin Olusegun</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>

            <div className="footer__socials">
                <a href="https://intagram.com"><GrInstagram /></a>
                <a href="https://twitter.com"><BsTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small> &copy;  Olusakin Olusegun, 2022 pub.</small>
            </div>
        </footer>
    )
}

export default Footer;
