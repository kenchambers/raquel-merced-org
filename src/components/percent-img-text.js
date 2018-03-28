import React from 'react';

const PercentImgText = ({ percent, text }) => {
  const style = {};

  return (
    <div style={{ height: '500px' }}>
      <div style={{ width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-xs">
              <h1>
                <span
                  style={{
                    fontFamily: 'Raleway',
                    color: 'white',
                    fontSize: '2.9em'
                  }}
                >
                  {percent}
                </span>
              </h1>
            </div>
            <div className="col-xs">
              <span
                style={{
                  color: 'white',
                  fontSize: '3em',
                  fontStyle: 'bold',
                  fontFamily: 'Raleway'
                }}
              >
                {text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentImgText;
