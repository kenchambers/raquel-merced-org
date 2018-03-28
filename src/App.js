import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppViews from './components/app-views';
import RaisedButton from 'material-ui/RaisedButton';
import MobileMenuHeader from './mobile-menu-header';

class App extends Component {
  state = {
    openMenu: false,
    showMenu: false
  };
  addMobileMenu = () => {
    if (window.innerWidth < 500) {
      this.setState({
        showMenu: !this.state.showMenu
      });
    }
  };

  toggle = e => {
    // e.preventDefault();
    this.setState({
      openMenu: !this.state.openMenu
    });
  };

  componentDidMount() {
    this.addMobileMenu();
  }
  render() {
    const navButtonStyle = {
      margin: 12
    };
    return (
      <div className="App">
        <Helmet title="You Are Doing Great" />

        <Router>
          <div>
            {this.state.showMenu ? (
              <MobileMenuHeader
                toggle={this.toggle}
                showMenu={this.state.showMenu}
                openMenu={this.state.openMenu}
              />
            ) : (
              <header className="App-header">
                <h1 className="App-title">Raquel Merced Foundation</h1>
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
              </header>
            )}

            <Route exact path="/" component={AppViews.Home} />
            <Route exact path="/about" component={AppViews.About} />
            <Route exact path="/donate" component={AppViews.Donate} />
            <Route exact path="/contact" component={AppViews.Contact} />
            <p className="App-intro">
              <span
                style={{
                  fontFamily: 'Raleway',
                  fontSize: '1em',
                  color: 'black'
                }}
              >
                To donate, please call us at 1-800-521-CARE within the U.S. (24
                hours) or +1-404-681-2552 (M-F, 8:30 a.m.-6:00 p.m. ET). CARE is
                a nonprofit 501(c)(3) public charity (tax ID# 13-1685039).
              </span>
            </p>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
