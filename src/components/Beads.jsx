import React from 'react';
import Bead from './Bead.jsx';

let colorCodes = ["paleBlue", "powderBlue", "niagara", "navyBlue", "skyBlue",
"lint", "islandParadise", "mintGreen", "turquoise", "lakeBlue", "lime", "green",
"white", "beige", "wood", "coralPink", "babyPink", "pink", "lightPurple", "purple",
"babyYellow", "yellow", "sandyBrown", "lightMaroon", "orange", "red", "brown",
"grey", "fuchsia", "black"];

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
          this.state.colors.map((e, index) => (
            <Bead
              className="bead"
              color={e}
              draggable="true"
              id={e}
              key={e}
            />))
        }
      </React.Fragment>
    )
  }
}

export default Beads;
