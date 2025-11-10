import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero__main container">
      <div className="hero__texts">
        <h2 className="hero__title">The best products start with Figma</h2>
        <h4 className="hero__subtitle mobile">
          Most calendars are designed for teams.
        </h4>
        <h4 className="hero__subtitle desktop">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </h4>
      </div>
      <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="hero__cta">Try For Free</a>
    </section>
  );
};

export default Hero;
