import React from 'react';
import './Header.css'; // Assume you create corresponding CSS files for styling

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#home" className="logo">PiggyBank</a>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1>Simplify Your Finances with AI-Powered Budgeting</h1>
                <p>Tailored for Danes, our app brings your financial goals within reach.</p>
                <button className="cta">Get Started for Free</button>
            </div>
        </header>
    );
};

export default Header;
