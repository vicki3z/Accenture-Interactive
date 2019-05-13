import React, { useState } from "react";
import axios from "axios";

/* Components */
import Pagination from "../../components/Pagination/Pagination";
import PeopleList from "../../components/PeopleList/PeopleList";

export default function PeopleContainer() {
  const [data, setPeopleData] = useState({
    page: 1,
    people: [],
    totalPages: 0
  });

  function handleClickGetPeople(page) {
    axios
      .get(`https://reqres.in/api/users?page=${page ? page : data.page}`)
      .then(response => {
        setPeopleData({
          page: page ? page : data.page,
          people: response.data.data
        });
      });
  }

  function nextPage() {
    handleClickGetPeople(data.page + 1);
  }

  function prevPage() {
    handleClickGetPeople(data.page - 1);
  }

  return (
    <>
      <Pagination
        handleClick={handleClickGetPeople}
        handleNext={nextPage}
        handlePrev={prevPage}
        page={data.page}
        people={data.people}
      />
      <PeopleList people={data.people} />
    </>
  );
}
