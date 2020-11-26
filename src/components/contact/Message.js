import React from 'react';
import { TextAreaWrapper,
         LabelWrapper,
         LabelIcons,
         Label,
         TextArea,
         Btn,
         ErrorAlertBox,
         Loader,
         LoaderWrapper
    } from './ContactELements';
import {MdSend} from 'react-icons/md';
import {BsPen} from 'react-icons/bs';


const Message= ({msgErrMsg, show, handleChange, isLoading}) => {

    return(
        <>
            <TextAreaWrapper show={show}>
                <LabelWrapper>
                    <LabelIcons>
                        <BsPen />
                    </LabelIcons>
                    <Label htmlFor="message">
                        Message
                    </Label>
                </LabelWrapper>
                <TextArea show={show} onChange={handleChange} name="message" rows="6" id="message" placeholder="Write your message here..."/>
                <ErrorAlertBox>
                    {show ? msgErrMsg[0].msg : ''}
                </ErrorAlertBox>
            </TextAreaWrapper>
            <Btn type="submit">
                {isLoading ? (
                    <LoaderWrapper>
                        <Loader />
                        <p>sending...</p>
                    </LoaderWrapper>
                ) : <MdSend />}
            </Btn>
        </>
    )
}

export default Message;