import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div>
                <div className={s.footerDescription}>
                    <div>
                        <NavLink to="/terms">Terms & Conditions</NavLink>
                        <p>Top International Flight Routes!</p>
                        <p>TravelMate helps You to find the best deals on airline tickets.</p>
                    </div>
                </div>
                <div>
                    <a href="/" class="fa fa-facebook"></a>
                    <a href="/" class="fa fa-twitter"></a>
                    <a href="/" class="fa fa-youtube"></a>
                    <a href="/" class="fa fa-instagram"></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
