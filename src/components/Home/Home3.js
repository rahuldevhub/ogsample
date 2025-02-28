import React from 'react'
import { Container } from 'react-bootstrap'
import Particle from '../Particle'
import "../../style.css"
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import male4 from '../../Assets/People/male4.png'
import female1 from '../../Assets/People/female1.png'
import female2 from '../../Assets/People/female2.png'
import female3 from '../../Assets/People/female3.png'
import female4 from '../../Assets/People/female4.png'
import female5 from '../../Assets/People/female5.png'

const Home3 = () => {
    let ClientFeedbackcontent = [
        {
          id: 1,
          name: "Sara Davoodi",
          roll: "Milan, Italy",
          img: female1,
          description: "Rahul is highly-skilled and very hard working person. He gave me advices for doing well in design and developing field. He is helpful professional with positive attitude. He shared his knowledge and experience with anyone who need a little guidance."
        },
        {
          id: 2,
          name: "Gobika",
          roll: "India",
          img: female2,
          description: "I am very impressed with the quality and creativity of the website design. Rahul was professional, responsive, and attentive to my needs and preferences. I highly recommend his services to anyone looking for a stunning and user-friendly website."
        },
        {
          id: 3,
          name: "Saran Raj",
          roll: "Author",
          img: male4,
          description: "It's really wonderful to work with Rahul. He got a lot of resistivity, creativity and mainly delivers the project on time. I would highly recommend your services to anyone looking for projects."
        },
        {
          id: 4,
          name: "Sudha",
          roll: "United States",
          img: female3,
          description: "I had the pleasure of working with Rahul who delivered work in a timely manner. His ability to work quickly and efficiently while maintaining a quality was truly impressive."
        },
        
        {
          id: 5,
          name: "Ishu",
          roll: "Germany",
          img: female4,
          description: "Rahul is amazing if you can give him even on a word document the exact layout and exact words of what you want he can deliver in a timely manner! He is online often so even if I wake up in the middle of the night or I'm working in the late afternoon or evening, the response time is always mined blowing. He is dedicated and professional!"
        },
        {
            id: 6,
            name: "Helen",
            roll: "United States",
            img: female5,
            description: "Rahul is highly skilled if you give him the ability to be creative. He understands the users experience. If you take just a few extra minutes and provide specific directions in regards to exact wording and what you in-vision, even if you draw on a screen shot or a piece of paper just be specific and you will receive great results."
          },
    
      ]
    return (
        <div>
             <section>
            <Container fluid className="home-about-section" id="#">
                <Particle />
                <Container>

            <h1 className='project-heading'>
                Client <span className="purple"> Testimonial </span>
            </h1>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {ClientFeedbackcontent.map((ClientFeedbackcontent) => (


                    <SwiperSlide>
                        <div>
                            <div >
                               
                                <img src={ClientFeedbackcontent.img} alt='Ckient avatar' className='DesignDevApp-img' />
                                <p className='DesignDevApp-content-title'>{ClientFeedbackcontent.name} ({ClientFeedbackcontent.roll}) </p>
                            </div>
                            <p className='DesignDevApp-description'>{ClientFeedbackcontent.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            </Container>
            </Container>
        </section>
        </div>
    )
}

export default Home3