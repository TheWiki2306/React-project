import React from 'react';
import './portfolio.css';
import img1 from '../../images/pic_1.jpg';
import img2 from '../../images/pic_2.jpg';
import img3 from '../../images/pic_3.jpg';
import img4 from '../../images/pic_4.jpg';
import img5 from '../../images/pic_5.jpg';
import img6 from '../../images/pic_6.jpg';


const data = [
    {
        id: 1,
        image: img1,
        title: 'Figma Dashboard for Charts',
        github: 'https://github.com/Wiki2306',
        demo: 'https://dribbble.com/shots/18542859-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },

    {
        id: 2,
        image: img2,
        title: 'Charts template and infographich',
        github: 'https://github.com/Wiki2306',
        demo: 'https://dribbble.com/shots/18672147-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },

    {
        id: 3,
        image: img3,
        title: 'Figma dashboard UI kit for data design',
        github: 'https://github.com/Wiki2306',
        demo: 'https://dribbble.com/shots/18672183-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },

    {
        id: 4,
        image: img4,
        title: 'Crypto Curremcy & Financial Visualization',
        github: 'https://github.com/Wiki2306',
        demo: 'https://dribbble.com/shots/18672362-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },

    {
        id: 5,
        image: img5,
        title: 'Chart template & infographics in Figma',
        github: 'https://github.com/Wiki2306',
        demo: 'https://dribbble.com/shots/18543094-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },

    {
        id: 6,
        image: img6,
        title: 'Figma daashboard UI kit for data design',
        github: 'https://github.com/Wiki2306',
        demo: 'https://dribbble.com/shots/18672453-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
]
const Porfolio = () => {
    return (
        <section>
            <h5>Recent Projects</h5>
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
                                    <a href={github} className='btn'>Github</a>
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
