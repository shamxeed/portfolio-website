import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background: #0a2472;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    color: #fff;
    text-align: center;
  }
`;

function index() {
  const date = new Date();

  const currentYear = date.getFullYear();

  return (
    <Footer>
      <p> &copy; From 2020 - {currentYear} Shamxeed</p>
    </Footer>
  );
}

export default index;
