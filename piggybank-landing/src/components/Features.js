import React from 'react';
import './Features.css'; 

const Feature = ({ title, description, imgSrc }) => (
    <div className="feature">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Features = () => {
    const featuresData = [
        {
            title: 'AI Financial Insights',
            description: 'Get personalized insights into your spending and saving habits.',
            //imgSrc: '/path'
        },

    ];

    return (
        <section className="features">
            <h2>Powerful Features</h2>
            <div className="features-container">
                {featuresData.map((feature, index) => (
                    <Feature key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default Features;
