import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

import {
  InputWrapper,
  LabelWrapper,
  LabelIcons,
  Label,
  Input,
} from './ContactELements';

const Email = ({ value, handleChange }) => {
  return (
    <InputWrapper>
      <LabelWrapper>
        <LabelIcons>
          <HiOutlineMail />
        </LabelIcons>
        <Label htmlFor='email'>Your Email</Label>
      </LabelWrapper>
      <Input
        type='email'
        id='email'
        name='email'
        value={value}
        onChange={handleChange}
        placeholder='name@gmail.com'
      />
    </InputWrapper>
  );
};

export default Email;
