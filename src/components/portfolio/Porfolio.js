import React from 'react';
import './portfolio.css';
import img1 from '../../images/hoo socials.PNG';
import img2 from '../../images/uniquecoop.PNG';
import img3 from '../../images/motoya.PNG';
import img4 from '../../images/optimize.PNG';
import img5 from '../../images/whisperedaroma.PNG';
import { useInView } from 'react-intersection-observer';



const data = [
    {
        id: 1,
        image: img1,
        title: 'Hoo Socials',
        // github: 'https://github.com/TheWiki2306/microsoft-clone-website',
        demo: 'https://hoosocials.com/'
    },

    {
        id: 2,
        image: img2,
        title: 'Uniquecoop',
        // github: 'https://github.com/TheWiki2306/optimize-web',
        demo: 'https://www.uniquecoop.net/',
    },

    {
        id: 3,
        image: img3,
        title: 'Motoya Kouture',
        github: 'https://gitlab.com/hayio/motoya-web',
        demo: 'https://motoyakouture.org/'
        
    },

    {
        id: 4,
        image: img4,
        title: 'Optimize Entertainment',
        github: 'https://github.com/TheWiki2306/optimize-web',
        demo: 'https://optimizeent.com/',
    },

    {
        id: 5,
        image: img5,
        title: 'Whispered Aroma',
        gitlab: 'https://github.com/TheWiki2306/Whispered-Aroma',
        demo: 'https://whisperedaroma.netlify.app/'
        
    }

]

const Porfolio = () => {
    const { ref: sectionRef3, inView: inView3 } = useInView({ triggerOnce: false });

    return (
        <section className={`portfolio__section ${inView3 ? 'animate' : ''}`} ref={sectionRef3}>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Repository</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Porfolio;
