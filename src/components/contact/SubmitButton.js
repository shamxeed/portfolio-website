import React from 'react'
import { MdSend } from 'react-icons/md'

import { Btn, Loader, LoaderWrapper } from './ContactELements'

function SubmitButton({ isLoading }) {


    return (
        <Btn type='submit'>
            { 
            isLoading ? 
                <LoaderWrapper>
                    <Loader />
                    <p>Sending...</p>
                </LoaderWrapper>  
                :
                <MdSend />
            }
        </Btn>
    )
}

export default SubmitButton
