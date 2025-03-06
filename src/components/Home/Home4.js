import React from 'react'
import { Container } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react';
import "../../style.css"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import designpencil from '../../Assets/serviceic/designpencil.png'
import web from '../../Assets/serviceic/webs.png'
import app from '../../Assets/serviceic/appdev.png'
// import training from '../../Assets/serviceic/training.png'
import social from '../../Assets/serviceic/marketing.png'
import testing from '../../Assets/serviceic/test.png'
// import ar from '../../Assets/serviceic/ar.png'
import MediaQuery, { useMediaQuery } from "react-responsive";
import { EffectCreative } from 'swiper/modules';

import Particle from '../Particle';

const Home4 = () => {
       let serviceioffer = [
        {
            id: 1,
            img : web,
            service: "Full Stack Websites",
            
        },
        {
            id: 2,
            img : app,
            service: "Flutter Mobile Applications",
            
        },
        {
            id: 3,
            img : designpencil,
            service: "Graphic Design",
        
        },
        {
            id: 6,
            img : testing,
            service: "UI / UX Design",
        },
        {
            id: 4,
            img : social,
            service: "Social Media Marketing",
           
        },
        // {
        //     id: 5,
        //     img : ar,
        //     service: "Social AR",
            
        // },
       
        // {
        //     id: 7,
        //     img : training,
        //     service: "Intenship",
           
        // }
    ]
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 992px)' })
    const isTaborMobile = useMediaQuery({ query: '(max-width: 992px)' })
  return (
<>
<section>
    
<Container fluid className="home-about-section" id="#">
    <Particle />
    <Container>

<h1 className='project-heading'>
    My <span className="purple"> Service </span>
</h1>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}

        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={false}

        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
    
    {serviceioffer.map((serviceioffer) => (
        <SwiperSlide>
            <div className='lg:w-2/3 flex justify-center object-contain mx-auto h-48 lg:h-96 swipercard' data-aos="zoom-in">
                <div className='swipercontent'>
                    <img src={serviceioffer.img} alt='Service icon' className='Service-icon' ></img>
                    <h1>{serviceioffer.service}</h1>
                    {/* <p>{serviceioffer.description}</p> */}
                
                </div></div>

        </SwiperSlide>

    ))}
      </Swiper>



      </Container>
</Container>


</section>

    </>
  )
}

export default Home4







