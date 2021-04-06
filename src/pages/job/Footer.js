import React from 'react';

const Footer = ({ title, company }) => {
    return (
        <footer className="footer-wrapper">
            <div className="footer">
                <div className="footer__text-block">
                    <p className="footer__job-title">{title}</p>
                    <p className="footer__company-name">{company}</p>
                </div>
                <button className="button1 footer__button">Apply Now</button>
            </div>
        </footer>
    );
}

export default Footer;
