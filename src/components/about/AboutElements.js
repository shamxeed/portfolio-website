import styled from 'styled-components';


export const AboutContainer = styled.div`
    background: #f8f9fa;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 50px;

    h2 {
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-size: 2.5rem;
        border-bottom: 2px dashed #ddd;
        text-align: center;
        padding-bottom: 10px;
        color: #263238;
    }

    @media only screen and (min-width: 800px){
        h2 {
            font-size: 3rem;
            padding-bottom: 7px;
        }
    }
`;

export const AboutWrapper = styled.div`
    max-width: 1000px;
    min-height: calc(100vh - 7rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0 20px ;
    margin: auto;

    @media screen and (min-width: 800px) {
        flex-direction: row;
    }
`;

export const DeveloperAvatarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    @media screen and (min-width: 800px) {
       padding: 0;
    }
`;

export const Comment = styled.div`
    width: 200px;
    height: 28px;
    display: flex;
    align-items: center;
    position: relative;
    border: 1.8px solid #ec615b;
    border-radius: 7px;
    margin-right: -50px;
    margin-bottom: 20px;
    animation: glowing 2.5s alternate infinite;

    &::after {
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        top: 100%;
        left: 20%;
        border-right: 1.8px solid #ec615b;
        border-bottom: 1.8px solid #ec615b;
        margin-top: -6px;
        background: #f8f9fa;
        transform: rotate(45deg);
    }

    @keyframes glowing {
        from {
            box-shadow: 0 0 15px #ec615b;
        }
        to {
            box-shadow: 0 0 0 #ec615b;
        }
    }

    @media screen and (min-width: 800px) {
        margin-right: -100px;

        &::after {
            left: 10%;
        }
    }
`;

export const Typing = styled.span`
    width: 22ch;
    position: absolute;
    font-size: .9rem;
    padding-left: 10px;
    border-right: 4px solid #1338a8;
    white-space: nowrap;
    overflow: hidden;

    animation: type 5s infinite steps(22);
    z-index: 1;

    @keyframes type {
        0% {
            width: 0ch;
        }
        50%{
            width: 22ch;
        }
        100% {
            width: 22ch;
        }
    }
`;

export const DeveloperAvatar = styled.img`
    width: 100%;
    max-width: 350px;

    @media screen and (min-width: 800px) {
        margin-right: 50px;
    }
`;

export const AboutWrittingsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: 1rem;
        color: rgba(0,0,0, .8);
        line-height: 2;
        text-align: justify;
        padding: 0 5px;
    }

    em {
        border-bottom: 1.5px dashed #ec615b;
    }

    @media screen and (min-width: 800px) {
        padding-top: 50px;

        p {
            padding: 0;
        }
    }
`;

export const Paragraph = styled.p`
    font-size: 1rem;
    color: rgba(0,0,0,.8)
`;

export const SkillsContainer = styled.div`
    max-width: 1000px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px 0;
    margin: auto;

    h3 {
        font-size: 1.5rem;

        text-align: center;
        color: #263238;
        padding-bottom: 20px;
    }

    @media screen and (min-width: 800px){
        flex-direction: row;
    }
`;

export const SkillsWrittings = styled.div`
    border-top: 2px dashed #ddd;
    border-right: 2px dashed #ddd;
    border-bottom: 2px dashed #ddd;
    border-left: 2px dashed #ddd;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: 800px) {
        margin-right: 25px;
        padding: 40.5px 20px;
    }
`;

export const SkillsSet = styled.div`
    border-top: 2px dashed #ddd;
    border-right: 2px dashed #ddd;
    border-bottom: 2px dashed #ddd;
    border-left: 2px dashed #ddd;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0 10px;
    margin-bottom: 20px;

    @media screen and (min-width: 800px) {
        margin-left: 25px;
    }
`;

export const SkillsIconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const SkillsIconsStyled = styled.div`
    width: 60px;
    height: 80px;
    font-size: 3.7rem;
    margin-right: 10px;

    @media screen and (min-width: 800px){
        width: 80px;
        height: 74px;
    }
`;

export const SvgIcon = styled.img`
    width: 60px;
    height: 80px;
    margin-top: -10px;

    @media screen and (min-width: 800px){
        width: 80px;
        height: 65px;
        margin-top: unset;
    }
`;