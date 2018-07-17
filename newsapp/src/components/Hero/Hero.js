import React from "react";
import PropTypes from 'prop-types';
import "./Hero.css";

class Hero extends React.Component {

  render () {
    const { backgroundImage, children } = this.props

    return (
      <div
        className="hero text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    );
  }
}

Hero.props = {
  backgroundImage: PropTypes.string,
  children: PropTypes.node
}

export default Hero;
