import React from 'react';
import flype from '../../../Images/Logo.png'
import open from '../../../Images/Burger OPEN.png'
import './Header.css'
import { Dropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='container'>
            <nav className='d-flex justify-content-between align-items-center'>
                <div className="logo"><img src={flype} alt="" /></div>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <img src={open} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <ul>
                            <li><a href="#swap"> Swap</a></li>
                            <li><a href="#swap"> Pool</a></li>
                            <li><a href="#swap"> Earn</a></li>
                            <li><a href="#swap"> Stake</a></li>
                            <li><a href="#swap"> Vote</a></li>
                            <li><a href="#swap"> About</a></li>
                        </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </nav>
        </div>
    );
};

export default Header;