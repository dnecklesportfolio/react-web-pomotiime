import styled from 'styled-components';
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'; 


class PomodoroTimer extends Component {
  render() {
    return (
      <div>
        <Card>
    <Image src='http://fakeimg.pl/350x200/?text=World&font=lobster' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
      </div>
    );
  }
}

 

export default PomodoroTimer;