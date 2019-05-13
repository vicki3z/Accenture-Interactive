import React from "react";

/* styling */
import "./Pagination.css";

/**
 * Pagination - Pagination component for all the buttons
 * @param {function} props.handleClick - handle click get people function
 * @param {function} props.handleNext - handle click next page function
 * @param {function} props.handlePrev - handle click previous page function
 * @param {Number} props.page - current page
 * @param {Array} props.people - list of people (use for checking whether to show the arrow buttons)
 */
const Pagination = ({ handleClick, handleNext, handlePrev, page, people }) => (
  <div className="pagination-wrapper">
    <>
      {people.length > 0 && page !== 1 && (
        <button onClick={handlePrev}>{"<"}</button>
      )}
      <button onClick={() => handleClick()}>Get the people</button>
      {people.length > 0 && <button onClick={handleNext}>{">"}</button>}
    </>
  </div>
);

export default Pagination;
