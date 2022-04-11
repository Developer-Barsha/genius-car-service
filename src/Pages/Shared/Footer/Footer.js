import React from 'react';
import './Footer.css'

const Footer = () => {
    const currentYear= new Date().getFullYear(); 
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright {currentYear} ©Developer-Barsha</small></p>
        </footer>
    );
};

export default Footer;