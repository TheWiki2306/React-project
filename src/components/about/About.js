import React from 'react';
import './about.css';
import Mine from '../../images/mine.jpg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

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
                            <small>1 Year Experience</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Optimize Entertainment<br/></small>
                            <small>Hoo-socials</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>3 completed projects</small>
                        </article>
                    </div>

                    <p>I am Olusegun David Olusakin, a front end developer, 
                        with proficiency in Html, CSS, Bootstrap, JavaScript, React, Typescript, Next.js, python. 
                        I have a 1 year experience building applications and I am currently furthering my learning to becoming more skilled. 
                        I have had the opportunity of working in a startup company; Hoo-socials.com (A company for Event organizers and promoters), 
                        I worked on a project recently where I built a website for an event company named; Optimize Entertainment. 
                        I Also worked on a project based on Machine Learning, where a Deep Learning algorithm was used to handle network vulnerabilities, and finally a few personal projects. I am a passionate individual and beyond passionate, I am an exciting communicator, a team player, critical thinker with problem solving skills. I also pay utmost attention to details,
                         a fast learner with core competence, and lastly I am self motivated.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;
