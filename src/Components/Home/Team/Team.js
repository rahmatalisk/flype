import React from 'react';
import './Team.css'
import icon from '../../../Images/Rectangle 7 (1).png'
import TeamBox from '../../TeamBox/TeamBox';
import pic1 from '../../../Images/Img (3).png'
import pic2 from '../../../Images/Img (1).png'
import pic3 from '../../../Images/Img (2).png'
import pic4 from '../../../Images/Img.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { Pagination } from "swiper";

const Team = () => {
    const teamBox = [
        { img: pic1, title: <>Israel {<br />} Perez</> },
        { img: pic2, title: <>Lorenso {<br />} Ipsumovich</> },
        { img: pic3, title: <>Israel {<br />} Perez</> },
        { img: pic4, title: <>Israel {<br />} Perez</> }
    ]
    // console.log(teamBox[0])
    return (
        <div className='team'>
            <div className="container">
                <div className='d-md-flex justify-content-between'>
                    <div>
                        <h5>OUR TEAM</h5>
                        <h2>We are lorem ipsum dolor sit amet, consectetur</h2>
                    </div>
                    <div className="box blue-border-box">
                        <img src={icon} alt="" />
                        <p>ABOUT US</p>
                    </div>



                </div>
               

                <div>
                    <Swiper

                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            350: {
                                slidesPerView: 1.5,
                                spaceBetween: 5,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 60,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            teamBox.map(team =>
                                <SwiperSlide><TeamBox img={team.img} title={team.title}></TeamBox></SwiperSlide> 
                            )
                        }
                        

                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Team;