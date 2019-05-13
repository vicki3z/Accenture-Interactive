import React, { useState } from "react";
import axios from "axios";

/* Components */
import Pagination from "../../components/Pagination/Pagination";
import PeopleList from "../../components/PeopleList/PeopleList";

export default function PeopleContainer() {
  const [data, setPeopleData] = useState({
    page: 1,
    people: [],
    totalPages: 0,
    error: false
  });

  function handleClickGetPeople(page) {
    axios
      .get(`https://reqres.in/api/users?page=${page ? page : data.page}`)
      .then(response => {
        setPeopleData({
          page: page ? page : data.page,
          people: response.data.data,
          totalPages: response.data.total_pages,
          error: false
        });
      });
  }

  function nextPage() {
    handleClickGetPeople(data.page + 1);
  }

  function prevPage() {
    handleClickGetPeople(data.page - 1);
  }

  function handleInputChange(e) {
    const page = Number(e.target.value);

    if (!isNaN(page) && page <= data.totalPages) {
      handleClickGetPeople(page);
    } else {
      // set error value to true for invalid input
      setPeopleData({
        page: data.page,
        people: data.people,
        totalPages: data.totalPages,
        error: true
      });
    }
  }

  return (
    <>
      {data.error && <div style={{ color: "red" }}>Invalid input</div>}
      <Pagination
        handleClick={handleClickGetPeople}
        handleNext={nextPage}
        handlePrev={prevPage}
        handleInputChange={handleInputChange}
        page={data.page}
        people={data.people}
        totalPages={data.totalPages}
      />
      <PeopleList people={data.people} />
    </>
  );
}
