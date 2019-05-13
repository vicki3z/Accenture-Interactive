import React from "react";

/* styling */
import "./Pagination.css";

/**
 * Pagination - Pagination component for all the buttons
 * @param {function} props.handleClick - handle click function
 */
const Pagination = ({ handleClick }) => (
  <div className="pagination-wrapper">
    <button onClick={handleClick}>Get the people</button>
  </div>
);

export default Pagination;
