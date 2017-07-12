import styled from 'styled-components';
import React from 'react';

const Card = (props) => {
    return (
      <Div>
        {props.children}
      </Div>
    );
  }


const Div = styled.div`
    max-width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 300px;
    min-height: 0;
    background: lightgray;
    padding: 10px 0;
    border: 1px solid slategray;
    border-radius: .28571429rem;

`

export {Card};