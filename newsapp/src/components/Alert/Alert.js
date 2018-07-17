import React from "react";
import PropTypes from 'prop-types';

class Alert extends React.Component {

  render () {
    const { type, style, children } = this.props

    return (
      <div
        className={`alert alert-${type} fade in`}
        style={{ width: "80%", margin: "0 auto", marginTop: 18, ...style }}
      >
        {children}
      </div>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Alert;
