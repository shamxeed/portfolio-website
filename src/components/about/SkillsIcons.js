import React from 'react';
import {FaHtml5,
        FaCss3, 
        FaJs, 
        FaReact, 
        FaGit, 
        FaNodeJs, 
        FaFigma
    } from 'react-icons/fa';
import {SiNextDotJs,
        SiFirebase, 
        SiVisualstudiocode, 
        SiPostman, 
        SiMongodb 
    } from 'react-icons/si';
    
import {SkillsIconsStyled} from './AboutElements';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


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
            <Tippy content="React Js">
                <SkillsIconsStyled>
                    <FaReact color="#61DAFB"/>
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
            <Tippy content="MongoDB">
                <SkillsIconsStyled>
                    <SiMongodb color="#47A248"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Postman">
                <SkillsIconsStyled>
                    <SiPostman color="#FF6C37"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="VSCode">
                <SkillsIconsStyled>
                    <SiVisualstudiocode color="#007acc"/>
                </SkillsIconsStyled>
            </Tippy>
            <Tippy content="Firebase">
                <SkillsIconsStyled>
                    <SiFirebase color="#FFCA28"/>
                </SkillsIconsStyled>
            </Tippy>
        </>
    )
}

export default SkillsIcons;