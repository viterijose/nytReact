import React from "react";
import PropTypes from 'prop-types';
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends React.Component {

  render() {
    const { topic, startYear,endYear, handleInputChange, handleFormSubmit } = this.props

    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="breed">Topic</label>
          <input
            value={topic}
            onChange={handleInputChange}
            name="topic"
            type="text"
            className="form-control"
            placeholder="Type topic of interest"
            id="topic"
          />
          <label htmlFor="breed">Start Year</label>
          <input
            value={startYear}
            onChange={handleInputChange}
            name="startYear"
            type="text"
            className="form-control"
            placeholder="Start year of article"
            id="startYear"
          />
          <label htmlFor="breed">End Year</label>
          <input
            value={endYear}
            onChange={handleInputChange}
            name="endYear"
            type="text"
            className="form-control"
            placeholder="End year of article"
            id="endYear"
          />
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn btn-success"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

SearchForm.props = {
  topic: PropTypes.string,
  startYear: PropTypes.string,
  endYear: PropTypes.string,
  handleInputChange: PropTypes.func,
  // breeds: PropTypes.string,
  handleFormSubmit: PropTypes.func
}

export default SearchForm;
