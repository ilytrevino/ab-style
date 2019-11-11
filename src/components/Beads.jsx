import React from 'react';
import Bead from './Bead.jsx';

let colorCodes = ["paleBlue", "powderBlue", "niagara", "navyBlue", "skyBlue",
"lint", "islandParadise", "mintGreen", "turquoise", "lakeBlue", "lime", "green"];

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
