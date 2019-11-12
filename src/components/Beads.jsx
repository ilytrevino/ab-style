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

  // drag = (ev) => {
  //   ev.dataTransfer.setData("text", ev.target.id);
  // }

  render() {
    return(
      <React.Fragment>
        <div className="beadsLayout">
          {
            this.state.colors.map((e, index) => (<Bead ondragstart={this.drag} key={e} color={e} />))
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Beads;
