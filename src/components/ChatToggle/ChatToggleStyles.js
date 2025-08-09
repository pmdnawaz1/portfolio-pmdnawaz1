import styled from 'styled-components';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

export const ChatToggleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  ${props => props.isOpen && `
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    transform: rotate(90deg);
  `}
`;

export const ChatPanel = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transform: ${props => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  @media (max-width: 768px) {
    width: 280px;
    right: -10px;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: white;
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const ChatClose = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

export const CommandList = styled.div`
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;
`;

export const CommandItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;
  border: 1px solid transparent;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CommandIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  ${CommandItem}:hover & {
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: scale(1.1);
  }
`;

export const CommandText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  strong {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  
  span {
    color: #ccc;
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export const ChatFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  
  p {
    color: #888;
    font-size: 1rem;
    margin: 0;
  }
`;

export const ChatBotForm = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  overflow-y: auto;
`;

export const FormStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const BotMessage = styled.p`
  color: #eee;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px 15px 15px 0;
  align-self: flex-start;
  max-width: 85%;
`;

const inputStyles = `
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #764ba2;
    box-shadow: 0 0 15px rgba(118, 75, 162, 0.5);
  }
  
  &::placeholder {
    color: #888;
  }
`;

export const FormInput = styled.input`
  ${inputStyles}
`;

export const FormTextarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 100px;
`;

export const FormButton = styled.button`
  padding: 1rem 0.8rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-end;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left-color: #764ba2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  align-self: center;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
