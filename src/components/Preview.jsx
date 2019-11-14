import React from 'react';

function Preview (props) {

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  }

  const dragOver = e => {
    e.preventDefault();
  }

  return(
    <React.Fragment>
      <div
        className={props.className}
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
      >
      </div>
    </React.Fragment>
  )
}

export default Preview;
