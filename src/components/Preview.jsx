import React from 'react';

class Beads extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      colors: [],
    })
  }
  render() {
    return(
      <React.Fragment>
        <div id="snaptarget"></div>
      </React.Fragment>
    )
  }
}

export default Beads;
