import React from 'react';

import s from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/" className={s.logo}>
                <img alt="logo" src={logo} />
            </a>
            <div className={s.resetButton}>
            <a href="/" class="fa fa-refresh"></a>
            </div>
        </header>
    )
}

export default Header;