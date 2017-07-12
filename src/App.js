import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PomodoroTimer from './containers/PomodoroTimer'
import StopwatchTimer from './containers/StopwatchTimer'
import ActualTime from './containers/ActualTime'

import './theme/globalStyles';
import { Header, Card, WelcomeTxt, SecondaryTxt, Container } from "./components/ui";

class PomoTimeMain extends Component {
  render() {
    return (
      <Container>
<Header>
  <WelcomeTxt>Hello Dwayne</WelcomeTxt>
<SecondaryTxt>You arent running any timers currently</SecondaryTxt>
    </Header>
        <PomodoroTimer/>
  
      </Container>
    );
  }
}

/*
      <StopwatchTimer/>
        <ActualTime/>
        */

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Pomodoro (Web)</h2>
        </div>
        <PomoTimeMain/>
      </div>
    );
  }
}

export default App;
