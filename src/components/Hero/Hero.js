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
        Full stack dev obsessed with DevOps, LLMs, and self-scaling systems. I
        build apps that communicate, think, and sell themselves shaping
        consumer, health, and edtech with every quirky line of code.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;