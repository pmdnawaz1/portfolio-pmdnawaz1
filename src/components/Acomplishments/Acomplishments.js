import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 40, text: 'Production Applications'},
  { number: 8, text: 'Portfolio Websites Built', },
  { number: 15, text: 'Client Projects Delivered', },
  { number: 5, text: 'Major Contributions', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Professional Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
