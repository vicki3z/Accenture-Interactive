import React from "react";

/* styling */
import "./PeopleCard.css";

const PeopleCard = () => (
  <div class="card-wrapper">
    <div>ID:</div>
    <div>
      <img
        src="http://www.rammandir.ca/sites/default/files/default_images/defaul-avatar_0.jpg"
        width="80"
        height="80"
        alt="avatar"
      />
    </div>
    <div>Last Name, First Name</div>
  </div>
);

export default PeopleCard;
