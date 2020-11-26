import React from 'react';
import { InputWrapper,
         LabelWrapper,
         LabelIcons,
         Label,
         Input,
         ErrorAlertBox     
    } from './ContactELements';
    
import {FaRegUserCircle} from 'react-icons/fa'


const FullName = ({nameErrMsg, show, handleChange}) => {

    return (
       <InputWrapper show={show}>
            <LabelWrapper>
                <LabelIcons>
                    <FaRegUserCircle />
                </LabelIcons>
                <Label htmlFor="username">
                    Full Name
                </Label>
            </LabelWrapper>
            <Input show={show} onChange={handleChange} type="text" name="name" id="username" placeholder="First Last"/>
            <ErrorAlertBox>
                    {show ? nameErrMsg[0].msg : ''}
            </ErrorAlertBox>
       </InputWrapper>
    )
}

export default FullName;