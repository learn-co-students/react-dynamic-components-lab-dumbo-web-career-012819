import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let opacityLevel = this.props.opacity

    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: opacityLevel}}>
          <ColorBox opacity={opacityLevel - 0.1}/>
        </div>
      )
    } else {
      return null;
    }
  }

}
