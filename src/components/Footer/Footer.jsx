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
                <div className={s.socialNetworkLinks}>
                    <a href="/" className="fa fa-facebook"><span>facebook link</span></a>
                    <a href="/" className="fa fa-twitter"><span>twitter link</span></a>
                    <a href="/" className="fa fa-youtube"><span>youtube link</span></a>
                    <a href="/" className="fa fa-instagram"><span>instagram link</span></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
