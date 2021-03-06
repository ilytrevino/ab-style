import React from 'react';
import styled from 'styled-components';
import Bead from './Bead.jsx';

let colorCodes = ["paleBlue", "powderBlue", "niagara"];

class Beads extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      colors: colorCodes,
    })
  }

  render() {
    return(
      <React.Fragment>
        {
          this.state.colors.map((e, index) => (<Bead key={e} color={e} />))
        }
      </React.Fragment>
    )
  }
}

export default Beads;
