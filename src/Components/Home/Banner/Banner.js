import React from 'react';
import './Banner.css'
import pic1 from '../../../Images/Group 270.png'
import whiteRectangle from '../../../Images/Rectangle 7.png'
import more from '../../../Images/Icon More.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className=" d-flex banner">
                <div className="banner-left col-12 col-md-6">
                    <h2>Change your <br />liquidity  position in a single swap</h2>
                    <p>Flype is a DEX protocol for swapping LP tokens in a single transaction. It turns LP tokens into tradable assets and enables a quick and easy way to change positions between different liquidity pools and protocols.</p>
                    <div className='d-flex'>
                        <div className='box blue-box-content'>
                            <img src={whiteRectangle} alt="" />
                            <p>Swap LP <br /> token</p>
                        </div>
                        <div className='box white-box-content'>
                            <img src={whiteRectangle} alt="" />
                            <p>Swap LP <br /> token</p>
                        </div>
                    </div>
                </div>
                <div className="banner-right col-12 col-md-6">
                    <img src={pic1} alt="" className="img-fluid" />
                </div>
            </div>
            <div className='d-none d-md-block'>
                <div className="d-flex justify-content-between align-items-center">
                    <h6>SCROLL FOR MORE</h6>
                    <img className='more-icon' src={more} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;