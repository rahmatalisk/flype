import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import icon1 from '../../../Images/Icon 1.svg'
import icon2 from '../../../Images/Icon 2.svg'
import icon3 from '../../../Images/Icon 3.svg'

import './Slider.css'

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <div className='container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='row'>
                            <div className='slide-left col-12 col-md-6'>
                                <p>01</p>
                                <h2>Easy-To-Use</h2>
                            </div>
                            <div className='slide-right col-12 col-md-6'>
                                <img src={icon1} alt="" />
                                <p>Flype DEX protocol transforms a cumbersome, multi-step process into a single and straightforward swap. Instead of lengthy withdrawal procedures with multiple token exchange pairs, Flype enables direct Single-transaction, cross-protocol, LP token swaps</p>
                                <h6 className='flype-now'>FLYPE NOW</h6>
                                <div className='slide-indicate'>
                                    <button className={`${index === 0 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(0)}></button>
                                    <button className={`${index === 1 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(1)}></button>
                                    <button className={`${index === 2 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(2)}></button>
                                </div>
                            </div>
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='row'>
                            <div className='slide-left col-12 col-md-6'>
                                <p>02</p>
                                <h2>Time-saving and <br /> Agile</h2>
                            </div>
                            <div className='slide-right col-12 col-md-6'>
                                <img src={icon2} alt="" />
                                <p>The direct LP token swaps reduce the time and effort necessary to exit pools and move to a new position. In DeFi’s ultra-high-volatility markets, this kind of agility may contribute to further yield maximization.</p>
                                <h6 className='flype-now'>FLYPE NOW</h6>
                                <div className='slide-indicate'>
                                    <button className={`${index === 0 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(0)}></button>
                                    <button className={`${index === 1 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(1)}></button>
                                    <button className={`${index === 2 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(2)}></button>
                                </div>
                            </div>
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='row'>
                            <div className='slide-left col-12 col-md-6'>
                                <p>03</p>
                                <h2>Cost-efficient</h2>
                            </div>
                            <div className='slide-right col-12 col-md-6'>
                                <img src={icon3} alt="" />
                                <p>Swapping LP tokens using the Flype protocol saves up to 50% of trading commissions compared with exchanging each of the underlying tokens through common Dex protocols. Furthermore, swapping LPs in one single transaction means an 85% reduction in gas cost. </p>
                                <h6 className='flype-now'>FLYPE NOW</h6>
                                <div className='slide-indicate'>
                                    <button className={`${index === 0 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(0)}></button>
                                    <button className={`${index === 1 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(1)}></button>
                                    <button className={`${index === 2 ? "indicate-active":"indicate-item"}`}  onClick={()=>setIndex(2)}></button>
                                </div>
                            </div>
                        </div>
                    </div>


                </Carousel.Item>

            </Carousel>


        </div>
    );
};

export default Slider;