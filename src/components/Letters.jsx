import React from 'react';
import Letter from './Letter.jsx';

function Letters (props) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return(
    <React.Fragment>
      <div className="options">
        {
          alphabet.map((e, index) => (
            <Letter
              className="letter"
              draggable="true"
              id={e}
              key={e}
            />))
        }
      </div>
    </React.Fragment>
  )
}

export default Letters;
