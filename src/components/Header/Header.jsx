import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const MenuSuperior = () => {
    return (
        <header className='header'>
            <nav>
                <ul className='header-options'>
                    <li>
                        <Link to={'/produtos'}>
                            PRODUTOS
                        </Link>

                    </li>
                    <li>

                        <Link to={'/explorar'}>
                            EXPLORAR
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default MenuSuperior;