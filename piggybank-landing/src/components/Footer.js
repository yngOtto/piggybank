import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <section className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@piggybank.dk</p>
                    <p>Phone: +45 1234 5678</p>
                </section>

                <section className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <h4>Follow Us</h4>
                    <p>
                        <a href="https://facebook.com">Facebook</a> |
                        <a href="https://twitter.com">Twitter</a> |
                        <a href="https://instagram.com">Instagram</a>
                    </p>
                </section>

                <section className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </section>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PiggyBank. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
