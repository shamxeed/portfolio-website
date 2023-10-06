'use client';

import React from 'react';
import { toast } from 'react-toastify';

import { ContactContainer, Form, FormWrapper } from './ContactELements';

import FullName from './FullName';
import Email from './Email';
import Message from './Message';
import { baseURL } from '../../constants';
import SubmitButton from './SubmitButton';
import { validateForm } from '../../utils/validateForm';

const defaultForm = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [isLoading, setLoading] = React.useState(false);

  const [form, setForm] = React.useState(defaultForm);

  const { name, email, message } = form;

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    const { error } = validateForm(form);

    if (!!error) {
      return toast.error(error);
    }

    setLoading(true);

    try {
      const response = await fetch(`${baseURL}/contact`, {
        method: 'post',
        body: JSON.stringify(form),
      });

      if (response.status === 200) {
        const data = await response.json();

        toast.success(data?.msg);
        setForm(defaultForm);
      } else {
        toast.error('Oops! Something went wrong!!');
      }
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContainer>
      <h2>Contact Me.</h2>

      <FormWrapper>
        <Form onSubmit={onSubmit} id='form'>
          <FullName value={name} handleChange={handleChange} />
          <Email value={email} handleChange={handleChange} />
          <Message value={message} handleChange={handleChange} />
          <SubmitButton isLoading={isLoading} type={'submit'} />
        </Form>
      </FormWrapper>
    </ContactContainer>
  );
};

export default React.memo(Contact);
