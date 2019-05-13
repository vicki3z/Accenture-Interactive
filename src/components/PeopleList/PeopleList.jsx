import React from "react";

import PeopleCard from "../PeopleCard/PeopleCard";

const PeopleList = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <PeopleCard />
    <PeopleCard />
  </div>
);

export default PeopleList;
