import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import PaperImageText from './paper-img-text';
import PercentImgText from './percent-img-text';

class HomeComponent extends Component {
  classPropertyA = 'anything';
  classPropertyB = 99;

  state = {};

  componentDidMount() {}

  render() {
    const spacingBgColor = {
      height: 350,
      backgroundColor: 'rgba(243, 196, 196, 0.22)'
    };

    const socialMediaIconStyle = {
      height: '10%',
      width: '10%'
    };

    return (
      <div>
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgHeight={'1000px'}
          bgImage={require('../../src/assets/city-coast.jpeg')}
          strength={200}
        >
          <div style={{ height: '700px' }}>
            <PercentImgText percent="Make a difference" text="" />
          </div>
        </Parallax>

        <Parallax strength={300}>
          <div style={spacingBgColor}>
            <div
              className="first-block-text"
              style={{
                height: 315
              }}
            >
              <div style={{ width: 'fit-content' }}>
                <PaperImageText
                  imageUrl={require('../../src/assets/disaster.jpg')}
                  title="Make a difference"
                  text="Here is some random text that will be replaced later i
                  am on a plane right now hurling through the sky at
                  like 0400s0 miles an hour we are flying above china ,
                  weee is so fun!"
                />
              </div>
              <RaisedButton
                onClick={this.sendMessage}
                label="Learn More"
                primary={true}
              />
            </div>
          </div>
          <Background className="custom-bg">
            <img src="../../src/assets/disaster.jpg" />
          </Background>
        </Parallax>
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImage={require('../../src/assets/hurricane.jpg')}
          strength={200}
        >
          <PercentImgText
            percent="86%"
            text="Okay great here is some more text about that giant statistic above
            here"
          />
        </Parallax>
        <Parallax strength={300}>
          <div style={spacingBgColor}>
            <div
              className="second-block-text"
              style={{
                height: 315
              }}
            >
              <div style={{ width: 'fit-content' }}>
                <PaperImageText
                  imageUrl={require('../../src/assets/disaster.jpg')}
                  title="Make a difference"
                  text="Here is some random text that will be replaced later i
                  am on a plane right now hurling through the sky at
                  like 0400s0 miles an hour we are flying above china ,
                  weee is so fun!"
                />
              </div>

              <RaisedButton
                onClick={this.sendMessage}
                label="Learn More"
                primary={true}
              />
            </div>
          </div>
          <Background className="custom-bg">
            <img src="../../src/assets/disaster2.jpg" />
          </Background>
        </Parallax>

        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImage={require('../../src/assets/salida.jpg')}
          strength={200}
        >
          <PercentImgText
            percent="86%"
            text="Okay great here is some more text about that giant statistic above
            here"
          />
        </Parallax>
        <Parallax strength={300}>
          <div style={spacingBgColor}>
            <div
              className="third-block-text"
              style={{
                height: 315,
                display: 'block'
              }}
            >
              <div style={{ width: 'fit-content' }}>
                <PaperImageText
                  imageUrl={require('../../src/assets/disaster.jpg')}
                  title="Make a difference"
                  text="Here is some random text that will be replaced later i
                  am on a plane right now hurling through the sky at
                  like 0400s0 miles an hour we are flying above china ,
                  weee is so fun!"
                />
              </div>
              <RaisedButton
                onClick={this.sendMessage}
                label="Learn More"
                primary={true}
              />
            </div>
          </div>
          <Background className="custom-bg">
            <img src="../../src/assets/hurricane2.jpg" />
          </Background>
        </Parallax>
        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImage={require('../../src/assets/city-coast.jpeg')}
          strength={200}
        >
          <h1>
            <span
              style={{
                fontFamily: 'Raleway',
                color: 'white',
                fontSize: '3em'
              }}
            >
              Connect with us
            </span>
          </h1>
        </Parallax>
        <Parallax strength={300}>
          <div style={{ height: 100 }}>
            <div style={{ height: 100 }} className="container">
              <div className="row" style={{ margin: '5%' }}>
                <div
                  style={socialMediaIconStyle}
                  className="col-xs col-centered"
                >
                  <img src={require('../../src/assets/facebook.svg')} />
                </div>
                <div
                  style={socialMediaIconStyle}
                  className="col-xs col-centered"
                >
                  <img src={require('../../src/assets/instagram.svg')} />
                </div>
                <div
                  style={socialMediaIconStyle}
                  className="col-xs col-centered"
                >
                  <img src={require('../../src/assets/twitter.svg')} />
                </div>
                <div
                  style={socialMediaIconStyle}
                  className="col-xs col-centered"
                >
                  <img src={require('../../src/assets/linkedin.svg')} />
                </div>
              </div>
            </div>
          </div>
          <Background className="custom-bg">
            <img src="../../src/assets/city-coast.jpeg" />
          </Background>
        </Parallax>
      </div>
    );
  }
}

export default HomeComponent;
