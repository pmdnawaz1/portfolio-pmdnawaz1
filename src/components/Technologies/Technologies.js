import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { IoRocketOutline  } from "react-icons/io5";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I&apos;ve worked with many web develpment technologies as a freelancer! Here are some.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js 15 <br />
            TypeScript <br />
            Tailwind CSS <br />
            Styled Components <br />
            HTML5, CSS3 <br />
            Vite, Webpack <br />
            Shadcn UI <br />
            Bootstrap <br />
            Responsive Design <br />
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
            Node.js, Express.js <br />
            Go, Python <br />
            MongoDB, PostgreSQL <br />
            Firebase, Supabase <br />
            WebSockets, tRPC <br />
            Redis, JWT <br />
            Google APIs, Gemini AI <br />
            Minio, AWS S3 <br />
            RESTful APIs <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <IoRocketOutline  size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            Vercel, Netlify <br />
            VPS (Custom Deployment) <br />
            Docker, STUN <br />
            Firebase, Render <br />
            Nginx, Apache <br />
            CI/CD Pipelines <br />
            AWS EC2, S3 <br />
            Domain & SSL Management <br />
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
            JavaScript ES6+ <br />
            TypeScript <br />
            Go (Golang) <br />
            Python <br />
            Java <br />
            System Design <br />
            Data Structures & Algorithms <br />
            Object-Oriented Programming <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
