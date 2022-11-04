import React from 'react';
import './Footer.css'
import flype from '../../Images/Logo.png'

import frame2 from '../../Images/Frame 2.png'
import frame3 from '../../Images/Frame 3.png'
import frame4 from '../../Images/Frame 4.png'
import frame5 from '../../Images/Frame 5.png'
import icon1 from '../../Images/Vector (1).png'
import icon2 from '../../Images/Rectangle 7 (1).png'

const Footer = () => {
    return (
        <div className='footer container'>
            <div className="footer-top row">
                <div className='col-md-6'>
                    <img src={flype} alt="" />
                    <p className='pe-md-5'>Flype is a decentralized exchange for LP Tokes. Community driven protocol governed by FLYP Stakers. Vote for key protocol parameters and take part in the protocol's governance. Come and join our growing community to learn more about our ongoing developments and future plans, share your feedback and feature requests with us.
                    </p>
                    <span>© 2021 Flype. All Rights Reserved.</span>
                </div>

                <div className='d-flex col-md-6'>
                    <div className='footer-top-right-left me-5 pe-md-5'>
                        <h6>Protocol</h6>
                        <a href="#Swap">Swap</a>
                        <a href="#Swap">Pool</a>
                        <a href="#Swap">Earn</a>
                        <a href="#Swap">Stake</a>
                        <a href="#Swap">Vote</a>
                    </div>
                    <div className='footer-top-right-left '>
                        <h6>Support</h6>
                        <a href="#Swap">About</a>
                        <a href="#Swap">Documentation</a>
                        <a href="#Swap">Tutorials</a>
                        <a href="#Swap">Github</a>
                        <a href="#Swap">Disclaimer</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom d-flex">
                <div className='col-md-6'>
                    <h6>Follow Us</h6>
                    <div className='d-flex flex-wrap '>
                        
                        <img src={frame2} alt="" />
                        <img src={frame5} alt="" />
                        <img src={frame3} alt="" />
                        <img src={frame4} alt="" />
                        <img src={frame5} alt="" />
                    </div>
                    <a href="#Privacy Policy">Privacy Policy</a>
                    <a href="#Privacy Policy">Terms and Conditions</a>
                </div>
                <div className='col-md-6'>
                    <h6>Join Our Discord</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas mauris vitae quam erat praesent ac mattis.</p>
                    {/* <div className="footer-border-box d-flex items-center">
                        <img className='icon1' src={icon1} alt="" />
                        <h3>join our discord</h3>
                        <img className='icon2' src={icon2} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;