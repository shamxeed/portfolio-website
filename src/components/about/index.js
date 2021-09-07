import React from 'react'
import diffInYears from 'date-fns/differenceInYears'
import diffInMonths from 'date-fns/differenceInMonths'

import {
    AboutContainer,
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

import SkillIcons from './SkillsIcons'
import DevAatar from '../images/devAvatar.svg';



const About = () => {

    const myDateOfBirth = '11-09-1999'

    const yearIStartedCoding = '09-01-2019'

    const myAge = diffInYears(new Date(), new Date(myDateOfBirth))

    const monthsImCoding = diffInMonths(new Date(), new Date(yearIStartedCoding))

    const yearsImCoding = (monthsImCoding / 12).toFixed(1)


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
                        Hi, I'm <em>DANJUMA Musa</em> AKA <em>Shamxeed</em>, {myAge} years old <em>Full-Stack JavaScript Developer</em> with <em>{yearsImCoding} years of coding experience.</em> I am currently more focused on <em>mobile applications development</em> with <em>React-Native</em> & <em>Expo</em> to cement my knowledge on that but I'm very comfortable with <em>Website development</em> as well. I am passionate about modern web technologies and enjoy learning something new every day. That <em>sleepy boy</em> with a busy life, from <em>Yola, Nigeria.</em>
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
                        Mobile Apps Development with React-Native &amp; Expo <br /> <br/>
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