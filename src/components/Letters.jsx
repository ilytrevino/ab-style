import React from 'react';
import Letter from './Letter.jsx';

class Letters extends React.Component {
  constructor(props){
    super(props);
    this.state = ({

    })
  }

  render() {
    return(
      <React.Fragment>
        <Letter
          className="letter"
          draggable="true"
          id="letterA"
        />
      </React.Fragment>
    )
  }
}

export default Letters;
