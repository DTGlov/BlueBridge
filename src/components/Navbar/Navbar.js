import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

function Navbar() {
    return (
      <div className="navbar">
          <LeftSide />
          <RightSide />
      </div>
    );
}

export default Navbar
