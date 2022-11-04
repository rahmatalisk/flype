import React from 'react';
import tokenimg from '../../../Images/Pic 2.png'
import './TokenQuality.css'
import icon from '../../../Images/Rectangle 7 (1).png'
import line from '../../../Images/Lines.png'

const TokenQuality = () => {
    return (
        <div className='token'>
            <div className="container">
                <div className="row justify-content-center align-items-center d-flex">
                    <div className="token-left col-12 col-md-5">
                        <img className='img-fluid' src={tokenimg} alt="" />
                    </div>
                    <div className="token-right col-12 col-md-7">
                        <h2>Add your LP tokens as liquidity </h2>
                        <p>Flype creates an opportunity for liquidity providers to generate multiple yields by providing LP tokens as liquidity to Flype protocol while keeping profits generated on the original pools. Liquidity providers can deposit your LP tokens and earn ~0.15% of all swaps on top of their base protocol’s yield.
                        </p>
                        <div className="box blue-border-box">
                            <img src={icon} alt="" />
                            <p>Earn <br /> Multiple <br /> Yeilds</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-100 line-img' src={line} alt="" />

        </div>
    );
};

export default TokenQuality;