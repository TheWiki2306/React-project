import React from 'react';
import './experience.css';
import { HiBadgeCheck } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';


const Experience = () => {
    const { ref: sectionRef2, inView: inView2 } = useInView({ triggerOnce: false });
    return (
        <section id='experience' className={`experience__section ${inView2 ? 'animate' : ''}`} ref={sectionRef2}>
            <h2>Technical Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-end Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>REACT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>TYPESCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>NEXT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>JQUERY</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>VUE</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>MATERIAL UI</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>


                <div className="experience__backend">
                    <h3>Back-end Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>


                        {/* <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>REACT NATIVE</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article> */}


                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>NODE</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

{/* 
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icons' />
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Begenner</small>
                            </div>
                        </article>  */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience;
