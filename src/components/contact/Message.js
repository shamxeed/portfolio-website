import React from 'react';
import { BsPen } from 'react-icons/bs';

import {
  TextAreaWrapper,
  LabelWrapper,
  LabelIcons,
  Label,
  TextArea,
} from './ContactELements';

const Message = ({ value, handleChange }) => {
  return (
    <>
      <TextAreaWrapper>
        <LabelWrapper>
          <LabelIcons>
            <BsPen />
          </LabelIcons>
          <Label htmlFor='message'>Message</Label>
        </LabelWrapper>

        <TextArea
          name='message'
          rows='6'
          id='message'
          value={value}
          onChange={handleChange}
          placeholder='Write your message here...'
        />
      </TextAreaWrapper>
    </>
  );
};

export default Message;
