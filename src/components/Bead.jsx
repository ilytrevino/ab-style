import React from 'react';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';

const SingleBead = styled('div')(props => `
  background-color: ${props.theme.colors[props.color]};
  display: inline-block;
  cursor: grabbing;
  width: 50px;
  height: 50px;
  margin: 10px 5px;
  border-radius: 50%;
  box-shadow: inset 0px -15px 20px rgba(0,0,0,.25);
`);

  const Bead = (props) => {
  return (
    <React.Fragment>
      <SingleBead color={props.color} draggable="true"/>
    </React.Fragment>
  )
};

export default (Bead);
