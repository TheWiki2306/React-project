import React from 'react';
import './testimonials.css';
import Avatar1 from '../../images/avatar1.jpg';
import Avatar2 from '../../images/avatar2.jpg';
import Avatar3 from '../../images/avatar3.jpg';
import Avatar4 from '../../images/avatar4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: Avatar1,
        name: 'Jada Chilli',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consequatur fuga alias, eaque consequuntur quidem odio architecto tempora dignissimos consectetur distinctio aut, beatae laborum dolores autem sit. Ducimus, aliquid architecto!'
    },

    {
        avatar: Avatar2,
        name: 'Mark Sule',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consequatur fuga alias, eaque consequuntur quidem odio architecto tempora dignissimos consectetur distinctio aut, beatae laborum dolores autem sit. Ducimus, aliquid architecto!'
    },

    {
        avatar: Avatar3,
        name: 'Tina Cook',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consequatur fuga alias, eaque consequuntur quidem odio architecto tempora dignissimos consectetur distinctio aut, beatae laborum dolores autem sit. Ducimus, aliquid architecto!'
    },

    {
        avatar: Avatar4,
        name: 'Joe Houston',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consequatur fuga alias, eaque consequuntur quidem odio architecto tempora dignissimos consectetur distinctio aut, beatae laborum dolores autem sit. Ducimus, aliquid architecto!'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonial__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="avatar one" />
                                </div>
                                <h5 className="client__name">
                                    {name}
                                </h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;
