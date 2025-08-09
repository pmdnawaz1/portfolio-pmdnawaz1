import styled from 'styled-components';

export const ModernContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${props => props.isScrolled ? 
    'rgba(26, 26, 26, 0.95)' : 'rgba(26, 26, 26, 0.8)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0;
  cursor: pointer;
  background: linear-gradient(135deg,rgb(234, 133, 102), #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 1rem;
    border-radius: 0;
    background: none;
    font-size: 2rem;
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: none;
    }
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px) scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

// Legacy components for backward compatibility
export const Container = styled.div`
  display: none;
`;

export const Div1 = styled.div`
  display: none;  
`;

export const Div2 = styled.div`
  display: none;
`;

export const Div3 = styled.div`
  display: none;
`;

export const ContactDropDown = styled.button`
  display: none;
`;

export const NavProductsIcon = styled.div`
  display: none;
`;