import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo" onClick={(e) => scrollToSection(e, '#home')}>
            Portfolio
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
