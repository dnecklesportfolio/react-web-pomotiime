import styled from "styled-components";
import React, { Component } from "react";
import { Card, Image, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class PomodoroTimer extends Component {
  state = {
    configOpen: false
  };
  handleClick = () => {
    this.setState({
      configOpen: !this.state.configOpen
    });
  };
  render() {
    return (
      <div>
        <Card color="red" onClick={this.handleClick}>
          {" "}<Header textAlign="left" as="h4">
            Pomodoro Timer
          </Header>
          <Card.Content>
            <Card.Header as="h1">hh:mm:ss</Card.Header>
            Tap here to configure your pomodoro session
          </Card.Content>
          {this.state.configOpen &&
            <Card.Content>
              <Card>
                <Image src="http://fakeimg.pl/350x200/?text=PomodoroConfig" />
              </Card>
            </Card.Content>}
        </Card>
      </div>
    );
  }
}

export default PomodoroTimer;
