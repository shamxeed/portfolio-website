import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: #f8f9fa;
  width: 100%;
  min-height: 90vh;

  h2 {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 2.5rem;
    border-bottom: 2px dashed #ddd;
    text-align: center;
    padding-bottom: 10px;
    color: #263238;
  }

  @media only screen and (min-width: 800px) {
    h2 {
      font-size: 3rem;
      padding-bottom: 7px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 0;

  button {
    width: 65px;
    height: 35px;
    background: #0c2b87;
    color: #f8f9fa;
    font-size: 1rem;
    border: none;
    outline: none;
    margin-top: 15px;
    cursor: pointer;
    justify-content: flex-end;

    &:hover {
      background: #ec615b;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: calc(90vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  input,
  textarea {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 350px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LabelIcons = styled.p`
  font-size: 1rem;
  margin-right: 5px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  outline: none;
  border: 1.5px solid #555555;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: 1.5px solid #777777;
  border-radius: 5px;
  padding: 10px;
`;

export const Btn = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c2b87;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (min-width: 800px) {
    &:hover {
      background: #ec615b;
    }
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.8rem;
    line-height: 35px;
    padding-left: 5px;
  }
`;

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 2.5px solid #fff;
  border-top: 2.5px solid transparent;
  border-radius: 50%;

  animation: spin 0.4s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } ;
`;
