import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const MobileMenuHeader = ({ openMenu, showMenu, toggle }) => {
  const navButtonStyle = {
    margin: 12
  };
  return (
    <header>
      <div>
        <AppBar
          style={{ backgroundColor: 'rgb(73, 56, 92)' }}
          title="RaquelMerced.org"
          onLeftIconButtonClick={toggle}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton name="menu">
                  <MoreVertIcon />
                </IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem name="about" primaryText="About" />
              <MenuItem name="help" primaryText="Help" />
              <MenuItem name="login" primaryText="Login" />
            </IconMenu>
          }
        />
        <Drawer
          style={{ backgroundColor: 'rgb(73, 56, 92)' }}
          ref={el => (this.LeftNav = el)}
          docked={false}
          open={openMenu}
          onRequestChange={openMenu => this.setState({ openMenu })}
        >
          <Link to="/">
            <RaisedButton
              primary={true}
              id="raised-nav-button-home"
              style={navButtonStyle}
              label="Home"
            />
          </Link>
          <Link to="/about">
            <RaisedButton
              primary={true}
              id="raised-nav-button-about"
              style={navButtonStyle}
              label="About"
            />
          </Link>
          <Link to="/donate">
            <RaisedButton
              primary={true}
              id="raised-nav-button-donate"
              style={navButtonStyle}
              label="Donate"
            />
          </Link>
          <Link to="/contact">
            <RaisedButton
              primary={true}
              id="raised-nav-button-contact"
              style={navButtonStyle}
              label="Contact"
            />
          </Link>
        </Drawer>
      </div>
    </header>
  );
};

export default MobileMenuHeader;
