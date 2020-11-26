import {createGlobalStyle} from 'styled-components';




export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    }
    
    body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    body::-webkit-scrollbar {
        width: 0.25rem;
    }
    body::-webkit-scrollbar:hover {
        width: 0.50rem;
    }  
    body::-webkit-scrollbar-track {
        background: #1e1e24;
    }
    
    body::-webkit-scrollbar-thumb {
        background: #EC615B;
    }

    .tippy-box {
        background-color: #EC615B !important;
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace !important; 
    }
    .tippy-arrow {
        color: #EC615B !important;
    }

    .checkmark-circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 2;
        stroke-miterlimit: 2 !important;
        stroke: #7ac142;
        fill: none;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    .checkmark {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        stroke-width: 2;
        stroke: #000;
        stroke-miterlimit: 10;
        margin: 10% auto;
        margin-bottom:6%;
        box-shadow: inset 0px 0px 0px #7ac142;
        animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
    }

    .checkmark-check {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }
    @keyframes scale {
        0%, 100% {
            transform: none;
        }
        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
        }
        @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 5px #7ac142;
        }
    }
`;