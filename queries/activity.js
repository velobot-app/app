import { useQuery } from "react-query"

export const getActivity = (id) => {
  return fetch(`http://localhost:3001/activities/${id}`, {
    "Accept": "application/vnd.eml.v1+json"
  }).then(res => res.json())
}

const hook = (id, initialData) => {
  return useQuery(`activities/${id}`, () => getActivity(id), { initialData })
}

export default hook
