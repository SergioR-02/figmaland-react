import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

const Header = () => {
  return (
    <header className="hero" id="home">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
