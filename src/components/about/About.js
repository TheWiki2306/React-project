import React from 'react';
import './about.css';
import Mine from '../../images/olu-1.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useInView } from 'react-intersection-observer';


const About = () => {
    const { ref: sectionRef1, inView: inView1 } = useInView({ triggerOnce: false });

    return (
        <section id='about' className={`about__section ${inView1 ? 'animate' : ''}`} ref={sectionRef1}>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Mine} alt="About image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Three years of professional experience spanning the finance, entertainment, education, fashion industries.</small>
                        </article>
                        {/* <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Optimize Entertainment<br/></small>
                            <small>Hoo-socials</small>
                            
                        </article>*/}
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Professional Skills</h5>
                            <small>- Proficient at finding solutions to complex problems</small><br/>
                            <small>- Effective communicator</small><br/>
                            <small>- Collaborative team member</small><br/>
                            <small>- Commitment to work</small>
                        </article> 
                    </div>

                    <p>Hi, I am Olusegun, a skilled Frontend Engineer with extensive experience. In addition to that, I have a background in backend development, 
                        working with technologies such as Node.js, PhP. 
                        I have also delved into mobile development, utilizing the React Native framework.
                        I'm passionate about building intuitive and visually appealing web and mobile applications, leveraging tools like React, React Native Vue.js, Node.js. 
                        With a solid track record of delivering successful projects, 
                        I'm excited to bring my expertise to innovative initiatives.
                        Let's connect and collaborate to create outstanding digital experiences!</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;
