import React from "react";

/* components */
import PeopleCard from "../PeopleCard/PeopleCard";

/**
 * PeopleList - presentational component for people list
 * @param {Array} props.people - people list from api response
 */
const PeopleList = ({ people }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    {people.map((person, index) => (
      <PeopleCard key={`person-${index}`} person={person} />
    ))}
  </div>
);

export default PeopleList;
