import React from 'react';
import icon from '../../../Images/Rectangle 7 (1).png'
import pic from '../../../Images/Pic 1 (1).png'
import './TokenSwap.css'



const TokenSwap = () => {
    return (
        <div className='token-swap'>
            <div className="container">
                <div className="row token-swap-content">
                    <div className="token-swap-left col-12 col-md-6">
                        <h2>Cross-protocol LP <br /> tokens Swap</h2>
                        <p>Flype  enables swapping ERC20 based LP tokens between different protocols and pools. With Flype, you can move your underlying assets  between various pools, for example from ETH/WBTC pool in Uniswap to DAI/USDC pool in SushiSwap or to renBTC/WBC pool in CURVE.
                        </p>
                        <div className="box blue-border-box">
                            <img src={icon} alt="" />
                            <p>SwapLP <br /> token</p>
                        </div>
                    </div>
                    <div className="token-swap-right col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <img className='img-fluid' src={pic} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TokenSwap;