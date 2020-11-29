import styled from 'styled-components';


export const IntroContainer = styled.div`
    background: #0a2472;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    span {
        color: #EC615B;
        font-family: 'Poppins';
    }
    em {
        color: #EC615B;
        font-family: 'Poppins';
    }

    @media only screen and (min-width: 800px){
        height: 100vh;
    }
`;

export const H1One = styled.h1`
    color: #fff;
    font-size: clamp(2.5rem, 10vw, 4.5rem);
    font-family: 'Poppins';
    word-spacing: 4px;
    line-height: 80px;
    text-align: center;

    @media only screen and (min-width: 800px){
        h1 {
            line-height: 130px;
        }
    }
`;

export const SlideUpText = styled.h1`
    color: #fff;
    font-size: clamp(2.5rem, 10vw, 4.5rem);
    font-family: 'Poppins';
    word-spacing: 4px;
    line-height: 80px;
    text-align: center;
`;

export const SlideUpContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Poppins';
`;

export const SlideUpWrapper = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding:0 5px ;

    span {
        position: relative;
        animation: animate 8s ease infinite;
    }

    @keyframes animate {
        0% {
            top: 0;
        }
        20% {
            top: 0;
        }
        25% {
            top: -80px;
        }
        65% {
            top: -80px;
        }
        70% {
            top: -160px;
        }
        95%{
            top: -160px;
        }
        100% {
            top: 0;
        }
    }

    @media screen and (min-width: 800px) {
        height: 100px;
        margin-top: 20px;
        line-height: 100px;

        @keyframes animate {
        0% {
            top: -7px;
        }
        20% {
            top: -7px;
        }
        25% {
            top: -105px;
        }
        65% {
            top: -105px;
        }
        70% {
            top: -208px;
        }
        95%{
            top: -208px;
        }
        100% {
            top: -7px;
        }
      }
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`;

export const SocialMediaLink = styled.a`
    text-decoration: none;
    font-size: clamp(2.2rem, 10vw, 2.5rem);
    margin-right: .6rem;
    color: #ffffff;
    cursor: pointer;
    z-index: 1;

    @media screen and (min-width: 800px) {
        margin-right: .9rem;
        &:hover {
            color: #EC615B;
            font-size: 2.8rem;
            transition: .3s ease-out;
        }
    }
`;

export const ArrowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Arrow = styled.span`
    width: 30px;
    height: 30px;
    position: relative;
    border-right: 8px solid #ec615b;
    border-bottom: 8px solid #ec615b;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: -20px;
    cursor: pointer;
    z-index: 1;
    transform: rotate(45deg);

    animation: scrollDown 1s alternate infinite;

    @keyframes scrollDown {
        from {
            top: 0;
        }
        to {
            top: 20px;
        }
    }
`;