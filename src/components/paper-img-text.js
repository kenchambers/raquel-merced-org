import React from 'react';
import Paper from 'material-ui/Paper';

const PaperImageText = ({ imageUrl, title, text }) => {
  const style = {
    fontFamily: 'Raleway'
  };

  return (
    <div className="paper-image-text-container">
      <Paper zDepth={1}>
        <div className="container" style={style}>
          <div className="row">
            <div className="col-sm">
              <img
                src={imageUrl}
                style={{
                  width: 200,
                  height: 100
                }}
              />
            </div>
            <div className="col-sm">
              <h1>{title}</h1>
              <br />
              {text}
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default PaperImageText;
