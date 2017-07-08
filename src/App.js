import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PomodoroTimer from './containers/PomodoroTimer'
import StopwatchTimer from './containers/StopwatchTimer'
import ActualTime from './containers/ActualTime'
import { Header,Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './theme/globalStyles';
class PomoTimeMain extends Component {
  render() {
    return (
      <Container textAlign='center' style={{width: 350}}>
   <Header size='large'>Hello Dwayne</Header>
        <Header as='h5'>  you aren't running any timers currently</Header> 
    
        <PomodoroTimer/>
        <StopwatchTimer/>
        <ActualTime/>
      </Container>
    );
  }
}


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
