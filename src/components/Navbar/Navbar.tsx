import { useState } from 'react';
import './Navbar.css';
import SocialIcons from '../SocialIcons/SocialIcons';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="hero__nav container">
      <div className="menu__opcions ">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="menu__link desktop">Home</a>
        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="menu__link desktop">Product</a>
        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="menu__link desktop">Pricing</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="menu__link desktop">About</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="menu__link  desktop">Contact</a>

        <figure>
          <img
              src="/src/assets/images/icon_logo.svg"
              alt="FigmaLand logo"
              className="hero__figma"
            />
        </figure>
      </div>

      <button
        onClick={toggleMenu}
        className="mobile menu-button"
        aria-label="Toggle menu"
      >
        <img
          src="/src/assets/images/icon_menu.svg"
          alt="img menu"
          className="mobile"
        />
      </button>

      {isMenuOpen && (
        <div
          className="menu__overlay"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      <div className={`menu__mobile ${isMenuOpen ? 'menu__mobile--open' : ''}`}>
        <button
          onClick={toggleMenu}
          className="menu__close"
          aria-label="Close menu"
        >
          ✕
        </button>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="menu__link">Home</a>
        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="menu__link">product</a>
        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="menu__link">Pricing</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="menu__link">About</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="menu__link">Contact</a>
        <SocialIcons className="hero__nav__icons"/>
      </div>

      <SocialIcons className="hero__nav__icons desktop" />
    </nav>
  );
};

export default Navbar;
