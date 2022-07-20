import React from 'react'
import './service.css';
import { BsCheck } from 'react-icons/bs';

const Service = () => {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Service;
