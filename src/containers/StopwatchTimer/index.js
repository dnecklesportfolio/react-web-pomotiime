import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
class StopwatchTimer extends Component {
      state = {
    configOpen: false,
  };
    handleClick=()=> {
    this.setState ({
      configOpen : !this.state.configOpen
    })
  }
  render() {
    return (
      <div>
        <Card  onClick={this.handleClick}>
        Stopwatch Timer
    <Image src='http://fakeimg.pl/350x200/?text=StopwatchTimer' />
    { this.state.configOpen &&
    <Card.Content>
      <Card>
        <Image src='http://fakeimg.pl/350x200/?text=StopwatchConfig' /> 
      </Card>
    </Card.Content>}
  
  </Card>
      </div>
    );
  }
}

export default StopwatchTimer;