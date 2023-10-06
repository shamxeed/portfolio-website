import React from 'react';
import diffInYears from 'date-fns/differenceInYears';
import diffInMonths from 'date-fns/differenceInMonths';

import {
  AboutContainer,
  AboutWrapper,
  DeveloperAvatarContainer,
  Comment,
  Typing,
  DeveloperAvatar,
  TextContainer,
  Paragraph,
  SkillsContainer,
  SkillsWrittings,
  SkillsSet,
  SkillsIconsContainer,
} from './AboutElements';

import SkillIcons from './SkillsIcons';

const About = () => {
  const myAge = diffInYears(new Date(), new Date(1999, 10, 9));

  const monthsImCoding = diffInMonths(new Date(), new Date(2019, 8, 1));

  const yearsImCoding = (monthsImCoding / 12).toFixed(1);

  return (
    <AboutContainer id='about'>
      <h2>About Me.</h2>
      <AboutWrapper>
        <DeveloperAvatarContainer>
          <Comment>
            <Typing>I am open to work...</Typing>
          </Comment>
          <DeveloperAvatar src={'/devAvatar.svg'} alt='developer shamxeed' />
        </DeveloperAvatarContainer>
        <TextContainer>
          <p>
            Hi, I'm <em>DANJUMA Musa</em> AKA <em>Shamxeed</em>, {myAge} years
            old <em>Full-Stack JavaScript Developer</em> &amp; Founder of{' '}
            <em>
              <a style={{ color: '#0fac81' }} href='https://www.saukie.net'>
                Saukie Pay
              </a>
              ,
            </em>{' '}
            {/*  <em>
              <a style={{ color: '#3366FF' }} href='https://hobbychats.com'>
                Hobbychat
              </a>
              ,
            </em>{' '}
            &amp;{' '}
            <em>
              <a style={{ color: '#1DB954' }} href='https://9jaquiz.com'>
                9ja Quiz
              </a>
              ,
            </em>{' '} */}
            with <em>{yearsImCoding} years of coding experience.</em> I am
            currently more focused on <em>mobile applications development</em>{' '}
            with <em>React-Native</em> &amp; <em>Expo</em> to cement my
            knowledge on that but I'm very comfortable with{' '}
            <em>Website development</em> as well. I am passionate about modern
            web technologies and enjoy learning something new every day. That{' '}
            <em>sleepy boy</em> with a busy life, from <em>Yola, Nigeria.</em>
          </p>
        </TextContainer>
      </AboutWrapper>
      <SkillsContainer>
        <SkillsWrittings>
          <h3>Skills and Experience</h3>
          <Paragraph style={{ textAlign: 'center' }}>
            Test-driven Development <br /> <br />
            Version Control with Git &amp; Github <br /> <br />
            Pair-programming &amp; Remote Collabration <br /> <br />
            Front-end Development &amp; Responsive Design <br /> <br />
            Mobile Apps Development with React-Native &amp; Expo <br /> <br />
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
  );
};

export default About;
