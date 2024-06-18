import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
    <Section row >
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
        Hi! I'm Sarfaraz Nawaz. This is my portfolio. I'm a full stack developer specialized in MERN, MEAN stack. I'm currently working at Loyalytics AI as a product engineer. 
        </SectionText>
      </LeftSection>
    </Section>
  
);

export default Hero;