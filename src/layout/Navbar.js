import React from 'react';
import { Link } from "react-router-dom";
import './css/Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-main'>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/count'>
                            Count
                        </Link>
                    </li>
                    <li>
                        <Link to='/color'>
                            Color
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar