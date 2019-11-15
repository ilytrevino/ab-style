import React from 'react';
import styled from 'styled-components';

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

function Bead (props) {

  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <React.Fragment>
      <SingleBead
        className={props.className}
        color={props.color}
        draggable={props.draggable}
        id={props.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
        {props.children}
      </SingleBead>
    </React.Fragment>
  )
};

export default Bead;
