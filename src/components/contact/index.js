import React, { useState, memo } from 'react'
import { toast } from 'react-toastify'
import Axios from 'axios'

import {
    ContactContainer,
    Form,
    FormWrapper
} from './ContactELements';

import FullName from './FullName'
import Email from './Email'
import Message from './Message'
import { endpoint } from '../../constants/endpoint';
import SubmitButton from './SubmitButton';
import { validateForm } from '../../utils/validateForm';


const Contact = () => {

    const [isLoading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const { name, email, message } = form

    const handleChange = (event) => setForm({...form, [event.target.name]: event.target.value})

    const onSubmit = async e => {

        e.preventDefault()

        if(isLoading) return

        const { error } = validateForm(form)

        if(!!error) {
            return toast.error(error)
        }

        setLoading(true)

        try {
            
            const { data } = await Axios.post(endpoint, form)

            setLoading(false)
            toast.success(data?.msg)
            setForm({name: '', email: '', message: ''})

        } catch (err) {

            setLoading(false)
            
            toast.error(err?.message)
        
        }
    }


    return(
        <ContactContainer>
            <h2>Contact Me.</h2>
            
            <FormWrapper>
                <Form onSubmit={onSubmit} id="form">
                    <FullName value={name} handleChange={handleChange} />
                    <Email value={email} handleChange={handleChange} />
                    <Message value={message} handleChange={handleChange} />
                    <SubmitButton isLoading={isLoading} />
                </Form>
            </FormWrapper>
        </ContactContainer>
    )
}


export default memo(Contact);