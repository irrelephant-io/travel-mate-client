import React from 'react';

import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to="/search" className={s.logo}>
                <img alt="logo" src={logo} />
            </NavLink>
            <div className={s.resetButton}>
                <a href="/" class="fa fa-refresh"></a>
            </div>
        </header>
    )
}

export default Header;
