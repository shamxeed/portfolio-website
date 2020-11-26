import React from 'react';
import {AboutContainer,
        AboutWrapper, 
        DeveloperAvatarContainer, 
        Comment, 
        Typing, 
        DeveloperAvatar, 
        AboutWrittingsContainer, 
        Paragraph, 
        SkillsContainer, 
        SkillsWrittings, 
        SkillsSet, 
        SkillsIconsContainer,
    } from './AboutElements';
import SkillIcons from './SkillsIcons';
import DevAatar from '../images/devAvatar.svg';



const About = () => {

    return(
        <AboutContainer id="about">
            <h2>About Me.</h2>
            <AboutWrapper>
                <DeveloperAvatarContainer>
                    <Comment>
                        <Typing>
                            I am open to work...
                        </Typing>
                    </Comment>
                    <DeveloperAvatar src={DevAatar} alt="developer shamxeed"/>
                </DeveloperAvatarContainer>
                <AboutWrittingsContainer>
                    <p>
                        Hi, I'm <em>DANJUMA Musa</em> AKA <em>Shamxeed</em>, 21 years old <em>MERN Stack Developer</em> with nearly <em>1.5 years of coding experience.</em> I am currently more focused on the <em>front-end</em> to cement my knowledge on that but I'm very comfortable with the <em>back-end</em> as well. I am passionate about modern web technologies and enjoy learning something new every day. That <em>sleepy boy</em> with a busy life, from <em>Yola, Nigeria.</em>
                    </p>
                </AboutWrittingsContainer>
            </AboutWrapper>
            <SkillsContainer>
                <SkillsWrittings>
                    <h3>Skills and Experience</h3>
                    <Paragraph style={{"textAlign": "center"}}>
                        Test-driven Development <br /> <br />
                        Version Control with Git &amp; Github <br/> <br/>
                        Pair-programming &amp; Remote Collabration <br/> <br/>
                        Front-end Development &amp; Responsive Design <br /> <br/>
                        Back-end Development of Servers, APIs &amp; Databases
                    </Paragraph>
                </SkillsWrittings>
                <SkillsSet>
                    <h3>Languages and Tools</h3>
                    <SkillsIconsContainer>
                        <SkillIcons />
                    </SkillsIconsContainer>
                </SkillsSet>
            </SkillsContainer>
        </AboutContainer>
    )
}

export default About;