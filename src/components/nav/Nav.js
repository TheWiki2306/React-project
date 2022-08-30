import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareMinus } from 'react-icons/bi';
import { useState } from 'react';



const Nav = () => {
    const [active, setActive] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''} ><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActive('#active')} className={active === 'about' ? 'active' : ''} ><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActive('#active')} className={active === 'experience' ? 'active' : ''} ><BiBook /></a>
            {/* <a href="#services" onClick={() => setActive('#active')} className={active === 'services' ? 'active' : ''}><RiServiceLine /></a> */}
            <a href="#contact" onClick={() => setActive('#active')} className={active === 'contact' ? 'active' : ''}><BiMessageSquareMinus /></a>
        </nav>
    )
}

export default Nav;
