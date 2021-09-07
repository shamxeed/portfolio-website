import React from 'react';

import {
    FaHtml5,
    FaCss3, 
    FaJs, 
    FaReact, 
    FaGit, 
    FaNodeJs, 
    FaFigma
} from 'react-icons/fa';

import {
    SiNextDotJs,
    SiVisualstudiocode, 
    SiGraphql,
    SiPostgresql, 
    SiMongodb,
    SiExpo,
    SiPostman,
    SiXcode
} from 'react-icons/si';
    
import { SkillsIconsStyled, SvgIcon } from './AboutElements';
import Tippy from '@tippyjs/react'
import prismaSvg from '../images/prisma.svg'


const SkillsIcons = () => {

    return(
        <>
            <Tippy content="HTML5">
                <SkillsIconsStyled>
                    <FaHtml5 color="#E34F26"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="CSS3">
                <SkillsIconsStyled>
                    <FaCss3 color="#1572B6"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="JavaScript">
                <SkillsIconsStyled>
                    <FaJs color="#F7DF1E"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Git">
                <SkillsIconsStyled>
                    <FaGit color="#F05032"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="ReactJs/Native">
                <SkillsIconsStyled>
                    <FaReact color="#61DAFB"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Expo">
                <SkillsIconsStyled>
                    <SiExpo color="#000020"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Next.Js">
                <SkillsIconsStyled>
                    <SiNextDotJs color="#000000"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Node.Js">
                <SkillsIconsStyled>
                    <FaNodeJs color="#339933"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Figma">
                <SkillsIconsStyled>
                    <FaFigma color="#F24E1E"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Graph-QL">
                <SkillsIconsStyled>
                    <SiGraphql color="#E10098"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="PostgreSQL">
                <SkillsIconsStyled>
                    <SiPostgresql color="#4169E1"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="MongoDB">
                <SkillsIconsStyled>
                    <SiMongodb color="#47A248"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Prisma">
                <SkillsIconsStyled>
                    <SvgIcon src={prismaSvg} />
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="VSCode">
                <SkillsIconsStyled>
                    <SiVisualstudiocode color="#007acc"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Postman">
                <SkillsIconsStyled>
                    <SiPostman color="#FF6C37"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Xcode">
                <SkillsIconsStyled>
                    <SiXcode color="#147EFB"/>
                </SkillsIconsStyled>
            </Tippy>
        </>
    )
}

export default SkillsIcons;