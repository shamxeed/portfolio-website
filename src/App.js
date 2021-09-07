import React, { Fragment } from 'react';
import smoothscroll from 'smoothscroll-polyfill'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import 'tippy.js/dist/tippy.css'

import { GlobalStyle } from './GlobalStyles'
import ParticlesELements from "./components/particles"
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer'

smoothscroll.polyfill();


const App = () => {

  const scrolling = () => {
    document.getElementById('about').scrollIntoView({
      behavior: "smooth"
    });
  };



  return(
    <Fragment>
      <GlobalStyle />
      <ParticlesELements />
      <Intro scrolling={scrolling}/>
      <About />
      <Contact />
      <Footer />
      <ToastContainer />
    </Fragment>
  )
}

export default App;