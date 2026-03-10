import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

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

  const handleNavClick = async (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (sectionId === 'home' || sectionId === 'projects' || sectionId === 'tech' || sectionId === 'about') {
      if (router.pathname !== '/') {
        await router.push(`/#${sectionId}`);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <ModernContainer isScrolled={isScrolled} ref={headerRef}>
      <Link href="/" passHref legacyBehavior>
        <Logo>pmdnawaz1</Logo>
      </Link>

      <Navigation>
        <NavItem>
          <NavLink onClick={(e) => handleNavClick(e, 'home')}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => handleNavClick(e, 'projects')}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => handleNavClick(e, 'tech')}>Technologies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={(e) => handleNavClick(e, 'about')}>About</NavLink>
        </NavItem>
        <NavItem>
          <Link href="/blogs" legacyBehavior passHref>
            <NavLink>Blogs</NavLink>
          </Link>
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
        <NavLink onClick={(e) => handleNavClick(e, 'home')}>Home</NavLink>
        <NavLink onClick={(e) => handleNavClick(e, 'projects')}>Projects</NavLink>
        <NavLink onClick={(e) => handleNavClick(e, 'tech')}>Technologies</NavLink>
        <NavLink onClick={(e) => handleNavClick(e, 'about')}>About</NavLink>
        <Link href="/blogs" legacyBehavior passHref>
          <NavLink>Blogs</NavLink>
        </Link>
      </MobileMenu>
    </ModernContainer>
  );
};

export default Header;
