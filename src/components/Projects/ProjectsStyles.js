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

  /* Make sticky only when flagged */
  position: ${props => (props.sticky ? 'sticky' : 'static')};
  top: var(--header-offset, 80px);
  z-index: 1;

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
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: ${props => (props.fixed ? '0' : '3rem 0')};
  padding: ${props => (props.fixed ? '0.6rem 2rem' : '0 2rem')};
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  top: ${props => (props.fixed ? 'var(--header-offset, 80px)' : 'auto')};
  left: 0;
  right: 0;
  z-index: ${props => (props.fixed ? 100 : 'auto')};
  background: ${props => (props.fixed ? 'transparent' : 'transparent')};
  backdrop-filter: ${props => (props.fixed ? 'blur(12px)' : 'none')};
  border-bottom: ${props => (props.fixed ? '1px solid rgba(255, 255, 255, 0.08)' : 'none')};
  
  @media ${props => props.theme.breakpoints.md} {
    gap: 0.8rem;
    margin: ${props => (props.fixed ? '0' : '2rem 0')};
    padding: ${props => (props.fixed ? '0.6rem 1.5rem' : '0 1.5rem')};
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    gap: 1rem;
    margin: ${props => (props.fixed ? '0' : '1.5rem 0')};
    padding: ${props => (props.fixed ? '0.2rem 1rem' : '0 1rem')};
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
    padding: 0.4rem 1rem;
    font-size: 12px;
  }
`;

export const CategoryDescription = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-top: -1rem;
  margin-bottom: 2rem;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  line-height: 1.6;
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 15px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    margin-bottom: 1rem;
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: 12px;
  background: ${props => props.primary ? 'rgba(102, 126, 234, 0.15)' : 'rgba(255, 255, 255, 0.08)'};
  color: #fff;
  border: 1px solid ${props => props.primary ? 'rgba(102, 126, 234, 0.4)' : 'rgba(255, 255, 255, 0.15)'};
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? 'rgba(102, 126, 234, 0.25)' : 'rgba(255, 255, 255, 0.15)'};
    border-color: ${props => props.primary ? 'rgba(102, 126, 234, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ProjectCounter = styled.span`
  margin-left: 0.5rem;
  font-size: 0.9em;
  opacity: 0.85;
`;

export const ShowMoreButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.8rem 1.6rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const CategorySpacer = styled.div`
  height: ${props => props.height || 0}px;
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