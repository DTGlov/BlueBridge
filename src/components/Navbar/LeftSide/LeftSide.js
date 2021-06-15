import React from 'react';
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from '../../../responsive/responsive';
import { menuStyles } from '../menuStyles';

function LeftSide() {
  const isMobile = useMediaQuery({maxWidth:SCREENS.md})
  return (
    <div className="navbar-left">
      <div className="navbar-left-logo">
        <h1>BLUEBRIDGE</h1>
      </div>
      {isMobile ? (
        <Menu right styles={menuStyles}>
          <div className="nav-slide">
            <p>Retail</p>
            <p>Intelligence</p>
            <p>Content</p>
            <p>Login</p>
          </div>
        </Menu>
      ) : (
        <div className="navbar-left-items">
          <p>Retail</p>
          <p>Intelligence</p>
          <p>Content</p>
        </div>
      )}
    </div>
  );
}

export default LeftSide
