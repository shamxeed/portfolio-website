import React from 'react';
import { IntroContainer,
         SlideUpContainer, 
         SlideUpWrapper, 
         SocialMediaContainer, 
         SocialMediaLink,
         ArrowContainer,
         Arrow,
         H1One,
         SlideUpText
    } from './IntroElements';

import {FaDev,
        FaGithub,
        FaLinkedin,
        FaTwitter
    } from 'react-icons/fa';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const Intro = ({scrolling}) => {
    return(
        <IntroContainer>
           <H1One>Hi, I'm <em>Sham_</em></H1One>

           <SlideUpText>
                <SlideUpContainer >
                    &#123;
                        <SlideUpWrapper>
                            <span>
                                Programer
                                <br/>
                                Developer 
                                <br/>
                                MERN Stack
                            </span>
                        </SlideUpWrapper>
                    &#125;
                </SlideUpContainer>
            </SlideUpText>
            
            <SocialMediaContainer>
                <Tippy content="Github" placement="bottom">
                    <SocialMediaLink href="https://github.com/shamxeed" target="blank">
                        <FaGithub />
                    </SocialMediaLink>
                </Tippy>
                <Tippy content="Dev.to" placement="bottom">
                    <SocialMediaLink href="https://dev.to/shamxeed" target="blank">
                        <FaDev />
                    </SocialMediaLink>
                </Tippy>
                <Tippy content="LinkedIn" placement="bottom">
                    <SocialMediaLink href="https://linkedin.com/in/danjuma-musa-629ba61b2" target="blank">
                        <FaLinkedin />
                    </SocialMediaLink>
                </Tippy>
                <Tippy content="Twitter" placement="bottom">
                    <SocialMediaLink href="https://twitter.com/shamxeed05" target="blank">
                        <FaTwitter />
                    </SocialMediaLink>
                </Tippy>
            </SocialMediaContainer>
            <ArrowContainer onClick={scrolling}>
                <Arrow />
            </ArrowContainer>
        </IntroContainer>
    )
}

export default Intro;