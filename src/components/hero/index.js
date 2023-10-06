import React from 'react';
import { Poppins } from 'next/font/google';

import {
  IntroContainer,
  SlideUpContainer,
  SlideUpWrapper,
  SocialMediaContainer,
  SocialMediaLink,
  ArrowContainer,
  Arrow,
  H1One,
  SlideUpText,
} from './HeroElements';

import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from 'react-icons/fa';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ParticlesELements from '../particles';

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '900',
});

const Hero = () => {
  const scrolling = () => {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <IntroContainer>
        <H1One className={poppins.className}>
          Hi, I'm <em className={poppins.className}>Sham_</em>
        </H1One>

        <SlideUpText>
          <SlideUpContainer className={poppins.className}>
            <p className={poppins.className}>&#123;</p>
            <SlideUpWrapper>
              <span className={poppins.className}>
                Programer
                <br />
                Developer
                <br />
                Full-Stack
              </span>
            </SlideUpWrapper>
            <p className={poppins.className}>&#125;</p>
          </SlideUpContainer>
        </SlideUpText>

        <SocialMediaContainer>
          <Tippy content='Github' placement='bottom'>
            <SocialMediaLink href='https://github.com/shamxeed' target='blank'>
              <FaGithub />
            </SocialMediaLink>
          </Tippy>
          <Tippy content='Dev.to' placement='bottom'>
            <SocialMediaLink href='https://dev.to/shamxeed' target='blank'>
              <FaDev />
            </SocialMediaLink>
          </Tippy>
          <Tippy content='LinkedIn' placement='bottom'>
            <SocialMediaLink
              href='https://linkedin.com/in/danjuma-musa-629ba61b2'
              target='blank'
            >
              <FaLinkedin />
            </SocialMediaLink>
          </Tippy>
          <Tippy content='Stack Overflow' placement='bottom'>
            <SocialMediaLink
              href='https://stackoverflow.com/users/13608842/shamxeed'
              target='blank'
            >
              <FaStackOverflow />
            </SocialMediaLink>
          </Tippy>
          <Tippy content='Twitter' placement='bottom'>
            <SocialMediaLink
              href='https://twitter.com/shamxeed05'
              target='blank'
            >
              <FaTwitter />
            </SocialMediaLink>
          </Tippy>
        </SocialMediaContainer>
        <ArrowContainer onClick={scrolling}>
          <Arrow />
        </ArrowContainer>
      </IntroContainer>

      <ParticlesELements />
    </>
  );
};

export default Hero;
