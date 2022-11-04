import React from 'react';
import icon from '../../Images/Rectangle 7 (1).png'
import './Roadmap.css'


const Roadmap = () => {
    return (
        <div className='road-map'>
            <div className="container roadmap d-md-flex justify-content-between align-items-center">
                <div>
                <h6>Roadmap</h6>
                <h2>Our achievements & goals</h2>
                </div>
                <div className='box blue-border-box'>
                    <img src={icon} alt="" />
                    <p>FULL <br /> ROADMAP</p>
                </div>
            </div>

            <div className='road-map-period d-md-flex justify-content-between align-items-center'>
                <div className="period-item-1">
                    <h5>Q2 2021</h5>
                    <p className='d-none d-lg-block'>Conse ctetur adipiscing <br /> elit</p>
                    <p className='d-lg-none'>Conse ctetur adipiscing elit</p>
                </div>
                <div className="period-item-2">
                    <h5>Q3 2021</h5>
                    <p className='d-none d-lg-block'>Conse ctetur adipiscing <br /> elit</p>
                    <p className='d-lg-none'>Conse ctetur adipiscing elit</p>
                </div>
                <div className="period-item-3">
                    <h5>Q4 2021</h5>
                    <p className='d-none d-lg-block'>Conse ctetur adipiscing <br /> elit</p>
                    <p className='d-lg-none'>Conse ctetur adipiscing elit</p>
                </div>

            </div>
        </div>
    );
};

export default Roadmap;