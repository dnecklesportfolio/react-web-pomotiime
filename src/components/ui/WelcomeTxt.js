import styled from 'styled-components';
import React from 'react';

const WelcomeTxt = (props) => {
    return (
    
        <h2>{props.children}</h2>
    
    );
  }


const Div = styled.div`
 margin-bottom: 0
`

export {WelcomeTxt};