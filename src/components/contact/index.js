import React from 'react';
import {
    ContactContainer,
    Footer,
    Form,
    FormWrapper
} from './ContactELements';

import FullName from './FullName';
import Email from './Email';
import Alert from './AlertBox';
import Message from './Message';


const Contact = ({handleSubmit, handleChange, isOpen, toggle, nameErrMsg, showNameErrMsg, emailErrMsg, showEmailErrMsg, msgErrMsg, showMsgErrMsg, isLoading}) => {

    return(
        <ContactContainer>
            <h2>Contact Me.</h2>
            
            <Alert isOpen={isOpen} toggle={toggle} />

        <FormWrapper>
            <Form onSubmit={handleSubmit} id="form">
                <FullName nameErrMsg={nameErrMsg} show={showNameErrMsg} handleChange={handleChange}/>
                <Email emailErrMsg={emailErrMsg} show={showEmailErrMsg} handleChange={handleChange} />
                <Message msgErrMsg={msgErrMsg} show={showMsgErrMsg} handleChange={handleChange} isLoading={isLoading}/>
            </Form>
        </FormWrapper>
        <Footer>
            <p> &copy; 2020 Shamxeed</p>
        </Footer>
        </ContactContainer>
    )
}


export default Contact;