import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

import {
  InputWrapper,
  LabelWrapper,
  LabelIcons,
  Label,
  Input,
} from './ContactELements';

const FullName = ({ value, handleChange }) => {
  return (
    <InputWrapper>
      <LabelWrapper>
        <LabelIcons>
          <FaRegUserCircle />
        </LabelIcons>

        <Label htmlFor='username'>Full Name</Label>
      </LabelWrapper>

      <Input
        type='text'
        name='name'
        id='username'
        value={value}
        placeholder='First Last'
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default FullName;
