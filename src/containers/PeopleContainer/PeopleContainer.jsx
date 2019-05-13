import React from "react";
import axios from "axios";

/* Logic hooks */
import usePeople from "../../logic-hooks/usePeople";

/* Components */
import Pagination from "../../components/Pagination/Pagination";
import PeopleList from "../../components/PeopleList/PeopleList";

export default function PeopleContainer() {
  const { data, setPeopleData } = usePeople();

  function handleClickGetPeople(page) {
    console.log(page);
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
