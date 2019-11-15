import React from 'react';
import Bead from './Bead.jsx';

function Beads (props) {

  let colorCodes = ["black", "white", "mintGreen", "paleBlue", "powderBlue", "grey",
  "skyBlue", "navyBlue", "purple", "turquoise", "lime", "islandParadise", "orange",
  "beige", "pink", "lightPurple", "yellow", "fuchsia"];

  return(
    <React.Fragment>
      <div className="options">
        {
          colorCodes.map((e, index) => (
            <Bead
              className="bead"
              color={e}
              draggable="true"
              id={e}
              key={e}
            />))
        }
      </div>
    </React.Fragment>
  )
}

export default Beads;
