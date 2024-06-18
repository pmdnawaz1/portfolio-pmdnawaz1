import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Dicss from './DiCss.js'


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import FloatingHeaderContent from './FloatingHeader.js';

const Header = () =>  (
  <Container>
      <Div3>
          <SocialIcons href="https://github.com/pmdnawaz1">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/pmdnawaz1">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/pmdnawaz1">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
      </Div3>
      <FloatingHeaderContent />
    </Container>
);

export default Header;
