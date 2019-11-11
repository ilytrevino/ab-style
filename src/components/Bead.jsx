import React from 'react';
import styled from 'styled-components';

const SingleBead = styled.b`
  background-color: skyBlue;
  display: inline-block;
  cursor: grabbing;
  width: 50px;
  height: 50px;
  margin: 10px 5px;
  border-radius: 50%;
  box-shadow: inset 0px -15px 20px rgba(0,0,0,.25);
`;

const Bead = (props) => {

  return (
    <React.Fragment>
      <SingleBead draggable="true"/>
    </React.Fragment>
  )
};

export default Bead;
