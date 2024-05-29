import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
import logo from '../../img/logo-main.png'

const MenuSuperior = () => {
    return (
        <header className='header'>
            <nav>
                <Link to={'/'}>
                    <img src={logo} />
                </Link>
                <ul className='header-options'>
                    <li>
                        <Link to={'/produtos'}>
                            MARKETPLACE
                        </Link>

                    </li>
                    <li>

                        <Link to={'/explorar'}>
                            EXPLORER
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default MenuSuperior;