import React, { useState } from 'react';
import { 
  ChatContainer, 
  ChatToggleButton, 
  ChatPanel, 
  ChatHeader, 
  ChatClose, 
  CommandList, 
  CommandItem, 
  CommandIcon, 
  CommandText, 
  ChatFooter,
  ChatBotForm,
  FormStep,
  FormInput,
  FormTextarea,
  FormButton,
  BotMessage,
  LoadingSpinner
} from './ChatToggleStyles';
import { chatCommands } from '../../constants/constants';

const ChatToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    subject: ''
  });

  const chatSteps = [
    {
      question: "👋 Hi there! I'm the pmdnawaz's assistant. What's your name?",
      field: 'name',
      type: 'text',
      placeholder: 'Enter your full name...',
      required: true
    },
    {
      question: "Great! What's your email address?",
      field: 'email',
      type: 'email',
      placeholder: 'Enter your email...',
      required: true
    },
    {
      question: "What's your mobile number? (Optional)",
      field: 'mobile',
      type: 'tel',
      placeholder: 'Enter your mobile number...',
      required: false
    },
  ];

  const handleCommandClick = (command) => {
    const subjects = {
      private_access: 'Private Repository Access Request',
      collaborate: 'Collaboration Opportunity',
      pricing: 'Project Quote Request',
      hire: 'Job Opportunity Discussion',
      contact: 'General Contact Inquiry'
    };
    
    setFormData(prev => ({ ...prev, subject: subjects[command.action] || 'General Inquiry' }));
    setShowChatBot(true);
    setCurrentStep(0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < chatSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFormSubmit();
    }
  };

  const handleFormSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setCurrentStep(chatSteps.length); // Success step
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setCurrentStep(chatSteps.length + 1); // Error step
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetChat = () => {
    setShowChatBot(false);
    setCurrentStep(0);
    setFormData({ name: '', email: '', mobile: '', message: '', subject: '' });
  };

  return (
    <ChatContainer>
      <ChatToggleButton 
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {isOpen ? '✕' : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-messages-square-icon lucide-messages-square"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>}
      </ChatToggleButton>

      <ChatPanel isOpen={isOpen}>
        <ChatHeader>
          {showChatBot ? (
            <>
              <button onClick={() => setShowChatBot(false)} style={{background: 'none', border: 'none', color: '#888', fontSize: '1.2rem', cursor: 'pointer'}}>&larr;</button>
              <h3>Contact Me</h3>
            </>
          ) : (
            <h3>Quick Actions</h3>
          )}
          <ChatClose onClick={() => { setIsOpen(false); resetChat(); }}>✕</ChatClose>
        </ChatHeader>
        
        {showChatBot ? (
          <ChatBotForm>
            {currentStep < chatSteps.length && (
              <FormStep>
                <BotMessage>{chatSteps[currentStep].question}</BotMessage>
                {chatSteps[currentStep].type === 'textarea' ? (
                  <FormTextarea
                    name={chatSteps[currentStep].field}
                    value={formData[chatSteps[currentStep].field]}
                    onChange={handleInputChange}
                    placeholder={chatSteps[currentStep].placeholder}
                    required={chatSteps[currentStep].required}
                  />
                ) : (
                  <FormInput
                    type={chatSteps[currentStep].type}
                    name={chatSteps[currentStep].field}
                    value={formData[chatSteps[currentStep].field]}
                    onChange={handleInputChange}
                    placeholder={chatSteps[currentStep].placeholder}
                    required={chatSteps[currentStep].required}
                  />
                )}
                <FormButton onClick={handleNextStep} disabled={isLoading || (chatSteps[currentStep].required && !formData[chatSteps[currentStep].field])}>
                  {isLoading ? <LoadingSpinner /> : (currentStep === chatSteps.length - 1 ? 'Send' : 'Next')}
                </FormButton>
              </FormStep>
            )}
            {currentStep === chatSteps.length && (
              <div>
                <BotMessage>✅ Thanks for reaching out! I&apos;ll get back to you soon.</BotMessage>
                <FormButton onClick={resetChat}>Done</FormButton>
              </div>
            )}
            {currentStep > chatSteps.length && (
              <div>
                <BotMessage>❌ Oops! Something went wrong. Please try again later.</BotMessage>
                <FormButton onClick={resetChat}>Close</FormButton>
              </div>
            )}
          </ChatBotForm>
        ) : (
          <CommandList>
            {chatCommands.map((command, index) => (
              <CommandItem 
                key={index} 
                onClick={() => handleCommandClick(command)}
              >
                <CommandIcon>
                  {command.action === 'contact' && '📧'}
                  {command.action === 'private_access' && '🔒'}
                  {command.action === 'collaborate' && '🤝'}
                  {command.action === 'pricing' && '💰'}
                  {command.action === 'hire' && '🚀'}
                </CommandIcon>
                <CommandText>
                  <strong>{command.title}</strong>
                  <span>{command.description}</span>
                </CommandText>
              </CommandItem>
            ))}
          </CommandList>
        )}
        
        {!showChatBot && (
          <ChatFooter>
            <p>Available 24/7 for project discussions</p>
          </ChatFooter>
        )}
      </ChatPanel>
    </ChatContainer>
  );
};

export default ChatToggle;