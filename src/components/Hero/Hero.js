import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row>
    <LeftSection>
      <SectionTitle main center>
        Sarfaraz
        <br /> Nawaz
      </SectionTitle>
      <SectionText>
        Full Stack Developer & Tech Entrepreneur with 40+ production applications across portfolios, client projects, and innovative solutions. 
        Specialized in MERN stack, Next.js, Go, and modern DevOps. From AI-powered platforms to enterprise admin panels, 
        I transform ideas into scalable digital experiences that drive real business value.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;