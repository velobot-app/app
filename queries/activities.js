import { useQuery } from "react-query"

export const getActivities = () => {
  return fetch("http://localhost:3001/activities", {
    "Accept": "application/vnd.eml.v1+json"
  }).then(res => res.json())
}

const hook = (initialData) => {
  return useQuery("activities", getActivities, { initialData })
}

export default hook
