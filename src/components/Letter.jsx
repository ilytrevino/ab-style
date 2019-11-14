import React from 'react';
import styled from 'styled-components';
import LetterA from '../img/abc/a.png';

const SingleLetter = styled('img')(props => `
  display: inline-block;
  cursor: grabbing;
  width: 90px;
  height: 90px;
  margin: 0 -5px;
`);

function Letter (props) {

  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <React.Fragment>
      <SingleLetter
        className={props.className}
        draggable={props.draggable}
        id={props.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
        src={LetterA}
      >
      </SingleLetter>
    </React.Fragment>
  )
};

export default Letter;