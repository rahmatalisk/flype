import React from 'react';
import './TeamBox.css'
import linkdlin from '../../Images/Linkedin.png'

const TeamBox = ({ img, title }) => {
    return (
        <div className='team-box-content'>
            <div>
                <img className='person-img' src={img} alt="" />
                <img className='linkdlin' src={linkdlin} alt="" />
            </div>
            <h4>{title}</h4>
            <h5>Co-Founder & CEO </h5>
            <p>
                Entrepreneur, Founder, programer and Product designer with more than 10 years of experience.
            </p>
        </div>
    );
};

export default TeamBox;