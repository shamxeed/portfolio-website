import React from 'react';
import {AlertBoxContainer, AlertBox, ButtonContainer} from './ContactELements';


const Alert = ({isOpen, toggle}) => {
    return (
        <AlertBoxContainer isOpen={isOpen}>
            <AlertBox>
                <svg className="checkmark" viewBox="0 0 52 52">
                    <circle className="checkmark-circle" fill="none" cx="26" cy="26" r="25" />
                    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                
                <h3>Thank You!</h3>
                <p>Your message has been successfully sent!</p>
                
                <ButtonContainer onClick={toggle}>
                    <button>Ok</button>
                </ButtonContainer>
            </AlertBox>
        </AlertBoxContainer>
    )
}

export default Alert;