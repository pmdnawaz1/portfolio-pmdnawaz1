import styled from 'styled-components';

// Match Technologies section styling exactly
export const ProjectsContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 0 1.5rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 1rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  min-height: 400px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 1.5rem;
    min-height: 380px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 24px;
    padding: 1.2rem;
    min-height: auto;
    flex-direction: column;
  }
`;

export const ProjectImage = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  border-radius: 16px;
  object-fit: cover;
  
  @media ${props => props.theme.breakpoints.md} {
    width: 56px;
    height: 56px;
    margin-bottom: 14px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
    flex: 1;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 20px;
  flex: 1;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 18px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex: 1;
`;

export const TechTag = styled.span`
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  font-size: 14px;
  color: #e0e0e0;
  transition: all 0.3s ease;
  height: 32px;
  display: flex;
  align-items: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 0.3rem 0.8rem;
    height: 28px;
  }
`;

export const MoreTagsIndicator = styled.span`
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  font-size: 14px;
  color: #e0e0e0;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  height: 32px;
  display: flex;
  align-items: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 0.3rem 0.8rem;
    height: 28px;
  }
`;

export const HiddenTags = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem;
  transform: ${props => props.show ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.9)'};
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 15;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  min-width: 200px;
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 12px;
    height: 12px;
    background: rgba(26, 26, 26, 0.95);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-start;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  ${props => props.primary ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    border-color: rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  `}
  
  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.6rem 1.2rem;
    font-size: 12px;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0;
  padding: 0 2rem;
  
  @media ${props => props.theme.breakpoints.md} {
    gap: 0.8rem;
    margin: 2rem 0;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    gap: 0.5rem;
    margin: 2rem 0;
    padding: 0 1rem;
  }
`;

export const CategoryButton = styled.button`
  background: ${props => props.active ? 
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
    'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#fff' : '#e4e6e7'};
  border: 2px solid ${props => props.active ? '#667eea' : 'rgba(255, 255, 255, 0.2)'};
  padding: 0.8rem 1.6rem;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
      'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 0.7rem 1.4rem;
    font-size: 15px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.6rem 1.2rem;
    font-size: 14px;
  }
`;

export const ProjectCounter = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 0.1rem 0.5rem;
  }
`;

export const CategoryDescription = styled.p`
  text-align: center;
  color: #e4e6e7;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  padding: 0 2rem;
  line-height: 1.6;
  opacity: 0.8;
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.1rem;
    margin: 0 auto 2rem auto;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
    padding: 0 1rem;
    margin: 0 auto 2rem auto;
  }
`;

export const ShowMoreButton = styled.button`
  display: block;
  margin: 3rem auto 0 auto;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding: 0.7rem 1.4rem;
  }
`;

export const VisibilityBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.visibility === 'PRIVATE' ? 
    'rgba(255, 107, 107, 0.9)' : 
    'rgba(78, 205, 196, 0.9)'};
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.visibility === 'PRIVATE' ? 
    'rgba(255, 107, 107, 0.3)' : 
    'rgba(78, 205, 196, 0.3)'};
  z-index: 5;
  
  @media ${props => props.theme.breakpoints.md} {
    top: 0.8rem;
    right: 0.8rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    padding: 0.25rem 0.6rem;
    top: 0.6rem;
    right: 0.6rem;
  }
`;

// Project type icons mapping
export const getProjectIcon = (tags, category) => {
  if (tags.includes('AI') || tags.includes('Gemini AI')) return '🤖';
  if (tags.includes('WebRTC') || tags.includes('Video')) return '📹';
  if (tags.includes('Mobile') || tags.includes('React Native')) return '📱';
  if (tags.includes('Docker') || tags.includes('Go')) return '🐳';
  if (tags.includes('Admin Panel') || tags.includes('Management')) return '⚙️';
  if (tags.includes('E-commerce') || tags.includes('Payment')) return '🛒';
  if (tags.includes('Healthcare') || tags.includes('Medical')) return '🏥';
  if (tags.includes('Education') || tags.includes('LMS')) return '🎓';
  if (tags.includes('Finance') || tags.includes('Tax')) return '💰';
  if (tags.includes('Islamic') || tags.includes('Masjid')) return '🕌';
  if (tags.includes('Bot') || tags.includes('Automation')) return '🤖';
  if (tags.includes('Analytics') || tags.includes('Dashboard')) return '📊';
  if (tags.includes('Real-time') || tags.includes('WebSockets')) return '⚡';
  if (tags.includes('Web Scraping') || tags.includes('Scraper')) return '🕷️';
  if (category === 'portfolios') return '💼';
  if (category === 'backends') return '⚙️';
  if (category === 'client') return '🏢';
  if (category === 'contributions') return '🤝';
  if (category === 'upcoming') return '🚀';
  return '💻';
};