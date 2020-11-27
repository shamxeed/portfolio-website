import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './GlobalStyles';
import ParticlesELements from "./components/particles";
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';
import smoothscroll from 'smoothscroll-polyfill';
import Axios from 'axios';

smoothscroll.polyfill();

class App extends Component {

  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      nameErrMsg: [],
      showNameErrMsg: false,
      emailErrMsg: [],
      showEmailErrMsg: false,
      msgErrMsg: [],
      showMsgErrMsg: false,
      isOpen: false,
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
  }  

 scrolling = () => {
    document.getElementById('about').scrollIntoView({
      behavior: "smooth"
    });
  };

 handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  };

//HANDLING SUBMIT AND VALIDATION
handleSubmit = async e => {
    e.preventDefault();
    this.setState({isLoading: true})
    let {name, email, message} = this.state;
    const removeSpaces = str => str.replace(/\s/g, '');

    if(name === "" || name === " " || name === "  " || name === "   "){
      name = removeSpaces(name);
    };
    if(message === "" || message === " " || message === "  " || message === "   "){
      message = removeSpaces(message);
    };

    //posting the request
    const form = await Axios.post('https://shamxeed-portfolio.herokuapp.com/api/form', {
      name,
      email,
      message
    })

    //wait the response from the server and update the UI
    const response = await form;
    
    //update the UI with successful message sent alert
    if(response.status === 200){
      document.getElementById('form').reset();
      this.setState({isOpen: true})
      this.setState({
        name: '',
        email: '',
        message: '',
        showNameErrMsg: false,
        showEmailErrMsg: false,
        showMsgErrMsg: false,
        isLoading: false
      }) 
    }

    //if user input is somehow did not meet requirement
    if(response.status === 206){
      this.setState({isLoading: false});
      //checking the name input field possible error
      const foundNameErr = response.data.some(e => e.param === 'name');
      if(foundNameErr){
        const nameErrorAlert = response.data.filter(e =>  e.param === 'name');
        this.setState({
          nameErrMsg: nameErrorAlert,
          showNameErrMsg: true
        });
      } else {
        this.setState({
          showNameErrMsg: false
        });

      }

      //checking the email input field possible error
      const foundEmailErr = response.data.some(e => e.param === 'email');
      if(foundEmailErr){
        const emailErrorAlert = response.data.filter(e =>  e.param === 'email');
        this.setState({
          emailErrMsg: emailErrorAlert,
          showEmailErrMsg: true
        });
      } else {
        this.setState({
          showEmailErrMsg: false
        });

      }
      
      //checking the message input field possible error
      const foundmsgErr = response.data.some(e => e.param === 'message');
      if(foundmsgErr){
        const msgErrorAlert = response.data.filter(e =>  e.param === 'message');
        this.setState({
          msgErrMsg: msgErrorAlert,
          showMsgErrMsg: true
        });
      }else {
        this.setState({
          showMsgErrMsg: false
        });
      }
    }
  };

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render(){

    const {
      isOpen,
      nameErrMsg,
      showNameErrMsg,
      emailErrMsg,
      showEmailErrMsg,
      msgErrMsg,
      showMsgErrMsg,
      isLoading
    } = this.state;

    return(
      <Router>
        <GlobalStyle />
        <ParticlesELements />
        <Intro scrolling={this.scrolling}/>
        <About />
        <Contact handleSubmit={this.handleSubmit} handleChange={this.handleChange} isOpen={isOpen} toggle={this.toggle} nameErrMsg={nameErrMsg} showNameErrMsg={showNameErrMsg} emailErrMsg={emailErrMsg} showEmailErrMsg={showEmailErrMsg} msgErrMsg={msgErrMsg} showMsgErrMsg={showMsgErrMsg} isLoading={isLoading}/>
      </Router>
    )
  }
}

export default App;