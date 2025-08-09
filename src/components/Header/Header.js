import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { 
  ModernContainer, 
  Logo, 
  Navigation, 
  NavItem, 
  NavLink, 
  SocialIcons, 
  MobileMenuButton, 
  MobileMenu 
} from './HeaderStyles';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderOffset = () => {
      if (typeof window === 'undefined') return;
      const el = headerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const height = Math.ceil(rect.height);
      document.documentElement.style.setProperty('--header-offset', `${height + 8}px`);
    };

    updateHeaderOffset();
    window.addEventListener('resize', updateHeaderOffset);
    return () => window.removeEventListener('resize', updateHeaderOffset);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <ModernContainer isScrolled={isScrolled} ref={headerRef}>
      <Logo onClick={() => scrollToSection('home')}></Logo>
      
      <Navigation>
        <NavItem>
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('tech')}>Technologies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
        </NavItem>
      </Navigation>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <SocialIcons href="https://github.com/pmdnawaz1" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="1.8rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/pmdnawaz1" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="1.8rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/pmdnawaz1" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size="1.8rem" />
        </SocialIcons>
        
        <MobileMenuButton 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink onClick={() => scrollToSection('tech')}>Technologies</NavLink>
        <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
      </MobileMenu>
    </ModernContainer>
  );
};

export default Header;
