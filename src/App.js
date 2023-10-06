'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'tippy.js/dist/tippy.css';

import { GlobalStyle } from './GlobalStyles';
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
