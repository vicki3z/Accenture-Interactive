import React from "react";

/* styling */
import "./PeopleCard.css";

/**
 * PeopleCard - presentational component for people card information
 *
 * @param {Object} props.person - person information
 */
const PeopleCard = ({ person }) => (
  <div className="card-wrapper">
    <div>ID: {person.id}</div>
    <div>
      <img src={person.avatar} width="80" height="80" alt={person.first_name} />
    </div>
    <div>
      {person.last_name}, <br />
      {person.first_name}
    </div>
  </div>
);

export default PeopleCard;
