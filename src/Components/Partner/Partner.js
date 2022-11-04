import React from 'react';
import './Partner.css'
import partnercard1 from '../../Images/Partner Card (1).png'
import partnercard2 from '../../Images/Partner Card (2).png'
import partnercard3 from '../../Images/Partner Card (3).png'
import partnercard4 from '../../Images/Partner Card (4).png'
import partnercard5 from '../../Images/Partner Card (5).png'
import partnercard6 from '../../Images/Partner Card (6).png'
import icon from '../../Images/Rectangle 7 (1).png'

const Partner = () => {
    return (
        <div className='partner'>
            <div className="container">
                <h6>Partners & integrations</h6>
                <h2 className='d-md-none'>Lorem ipsum dolor sit amet,  consectetur adipisci</h2>
                <h2 className='d-none d-md-block'>Lorem ipsum dolor sit amet, <br /> consectetur adipisci</h2>
            </div>

            <div className="partner-card-content ">
                <img src={partnercard1} alt="" />
                <img src={partnercard2} alt="" />
                <img src={partnercard3} alt="" />
                <img src={partnercard4} alt="" />
                <img src={partnercard5} alt="" />
                <img src={partnercard6} alt="" />
            </div>
            <div className='partner-footer d-md-flex items-center justify-content-center container'>
                <h2>Cross-protocol LP tokens <br /> Swap</h2>
                <div className="box blue-border-box ">
                    <img src={icon} alt="" />
                    <p>Swap <br /> LP token</p>
                </div>
            </div>

        </div>
    );
};

export default Partner;