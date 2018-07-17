import React from "react";
// import CardBtn from "../CardBtn";
import PropTypes from 'prop-types';
import "./Card.css";

class Card extends React.Component {

  render () {
    const { link,pubDate,headline} = this.props

    return (
      <div
        className="card"
        // style={{
        //   backgroundImage: image ? `url(${image})` : "none"
        // }}
      >
        {/* {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />} */}
        <a href={link}><h1>{headline}</h1></a>
        <h4>Published Date: {pubDate}</h4>
        {/* <CardBtn
          style={{ opacity: image ? 1 : 0 }}
          onClick={handleBtnClick}
          dataValue="pass"
        />
        <CardBtn
          style={{ opacity: image ? 1 : 0 }}
          onClick={handleBtnClick}
          dataValue="pick"
        /> */}
      </div>
    );
  }
}

Card.propTypes = {
  link: PropTypes.string,
  pubDate: PropTypes.string,
  headline: PropTypes.string,
  handleBtnClick: PropTypes.func
}

export default Card;
