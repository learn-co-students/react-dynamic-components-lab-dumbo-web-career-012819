import React, { Component } from 'react';

class ColorBox extends Component {

  render() {
      let newValue = this.props.opacity;
      console.log( "in Render", this.props.opacity);
      if (newValue >= 0.2) {
          newValue -= 0.1;
          return (
              <div className="color-box" style={{opacity: newValue}}>

                  < ColorBox opacity={newValue} />
              </div>
          );
      } else {
          return (null)
      }
  }
}

export default ColorBox;
