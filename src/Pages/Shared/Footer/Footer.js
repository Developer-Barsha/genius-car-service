import React from 'react';
import './Footer.css'

const Footer = () => {
    const currentYear= new Date().getFullYear(); 
    return (
        <footer>
            <p><small>Copyright {currentYear} ©Developer-Barsha</small></p>
        </footer>
    );
};

export default Footer;