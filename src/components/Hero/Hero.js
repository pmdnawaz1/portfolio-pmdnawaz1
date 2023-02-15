import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
        Hi! I'm Sarfaraz Nawaz. This is my portfolio. I'm a full stack developer specialized in MERN stack. I built this portfolio using React.js and Next.js. 
        </SectionText>
      {/* {<Button onClick={props.handleClick}>My Certifications</Button>} */}
      </LeftSection>
    </Section>
  
);

export default Hero;