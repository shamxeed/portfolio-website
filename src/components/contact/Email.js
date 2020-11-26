import React from 'react';
import {InputWrapper, LabelWrapper, LabelIcons, Label, Input, ErrorAlertBox} from './ContactELements';
import {HiOutlineMail} from 'react-icons/hi';


const Email = ({emailErrMsg, show, handleChange}) => {

    return(
        <InputWrapper show={show}>
            <LabelWrapper>
                <LabelIcons>
                    <HiOutlineMail />
                </LabelIcons>
                <Label htmlFor="email">
                    Your Email
                </Label>
            </LabelWrapper>
            <Input show={show} onChange={handleChange} type="email" id="email" name="email" placeholder="name@gmail.com"/>
            <ErrorAlertBox>
                {show ? emailErrMsg[0].msg : ''}
            </ErrorAlertBox>
        </InputWrapper>
    )
}

export default Email;