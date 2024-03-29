import React from 'react';
import './portfolio.css';
import img1 from '../../images/m_soft.jpg';
import img2 from '../../images/Logo.PNG';
import img3 from '../../images/port_img.jpg';
import img4 from '../../images/Capture_img.PNG';
// import img5 from '../../images/pic_5.jpg';
// import img6 from '../../images/pic_6.jpg';


const data = [
    {
        id: 1,
        image: img1,
        title: 'Microsoft Landing page (clone)',
        github: 'https://github.com/TheWiki2306/microsoft-clone-website',
        demo: 'https://msoftcloneweb.netlify.app/'
    },

    {
        id: 2,
        image: img2,
        title: 'Optimize Entertainment',
        github: 'https://github.com/TheWiki2306/optimize-web',
        demo: 'https://optimizeent.com',
    },

    {
        id: 3,
        image: img3,
        title: 'My Portfolio',
        github: 'https://github.com/TheWiki2306/React-project',
        demo: 'https://wikiportfolio.netlify.app/',
    },

    {
        id: 4,
        image: img4,
        title: 'Mini E-commerce store',
        github: 'https://github.com/TheWiki2306/Cloud-store',
        demo: 'https://storecloud.netlify.app'
        
    }

    // {
    //     id: 4,
    //     image: img4,
    //     title: 'Crypto Curremcy & Financial Visualization',
    //     github: 'https://github.com/Wiki2306',
    //     demo: 'https://dribbble.com/shots/18672362-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    // },

    // {
    //     id: 5,
    //     image: img5,
    //     title: 'Chart template & infographics in Figma',
    //     github: 'https://github.com/Wiki2306',
    //     demo: 'https://dribbble.com/shots/18543094-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    // },

    // {
    //     id: 6,
    //     image: img6,
    //     title: 'Figma daashboard UI kit for data design',
    //     github: 'https://github.com/Wiki2306',
    //     demo: 'https://dribbble.com/shots/18672453-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    // },
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
