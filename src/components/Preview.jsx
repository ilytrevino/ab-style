import React from 'react';



class Beads extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      colors: [],
    })
  }

  // allowDrop = (ev) => {
  //   ev.preventDefault();
  // }
  //
  // drop = (ev) => {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  // }

  render() {
    return(
      <React.Fragment>
        <div className="container" id="div1" onDrop={this.drop} onDragOver={this.allowDrop}>
          <div id="snaptarget" ></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Beads;
