import React from "react";
import axios from "axios";

/* Logic hooks */
import usePeople from "../../logic-hooks/usePeople";

/* Components */
import Pagination from "../../components/Pagination/Pagination";
import PeopleList from "../../components/PeopleList/PeopleList";

export default function PeopleContainer() {
  const { data, setPeopleData } = usePeople();

  function handleClickGetPeople() {
    axios
      .get(`https://reqres.in/api/users?page=${data.page}`)
      .then(response => {
        setPeopleData({ page: data.page, people: response.data.data });
      });
  }

  return (
    <>
      <Pagination handleClick={handleClickGetPeople} />
      <PeopleList people={data.people} />
    </>
  );
}
