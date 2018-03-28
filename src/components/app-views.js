import React, { Component } from 'react';
import HomeComponent from './home';
import ContactComponent from './contact';
import AboutComponent from './about';
import DonateComponent from './donate';

export default class AppViews extends Component {
  static Home = () => (
    <div>
      <HomeComponent />
    </div>
  );
  static Contact = () => (
    <div>
      <ContactComponent />
    </div>
  );
  static About = () => (
    <div>
      <AboutComponent />
    </div>
  );
  static Donate = () => (
    <div>
      <DonateComponent />
    </div>
  );
}
