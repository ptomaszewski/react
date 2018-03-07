import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div
        style={{
          width: '100px',
          height: '30px',
          backgroundColor: this.props.color
        }}
      />
    );
  }
}

export default Button;
