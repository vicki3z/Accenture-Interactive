import { useState } from "react";

export default function usePeople() {
  const [data, setPeopleData] = useState({ page: 1, people: [] });

  return { data, setPeopleData };
}
