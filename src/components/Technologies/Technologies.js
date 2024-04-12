import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FcDeployment } from "react-icons/fc";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with many web develpment technologies as a freelancer! Here are some.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js <br />
            Next.js <br />
            Angular <br />
            Nuxt <br />
            Html5, CSS3 <br />
            JQuery <br />
            Wordpress <br />
            Tailwind CSS <br />
            Bootstrap <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            Azure Functions <br />
            Google APIs <br />
            Firebase <br />
            MongoDB <br />
            MySQL <br />
            Java <br />
            PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FcDeployment  size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS EC2 <br />
            Hostinger VPS <br />
            Azure app services <br />
            cPanel <br />
            Firebase, Render, Vercel and Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Java <br />
            JavaScript <br />
            C <br />
            Fundamentals in Python <br />
            OOPS and DSA 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
