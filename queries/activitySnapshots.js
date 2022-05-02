import { useQuery } from "react-query"

export const getActivitySnapshots = (id, t = 0) => {
  return fetch(`http://localhost:3001/activities/${id}/snapshots?limit=500&t=${t}`, {
    "Accept": "application/vnd.eml.v1+json"
  }).then(res => res.json())
}

const hook = (id, initialData) => {
  return useQuery(`activities/${id}/snapshots`, () => getActivitySnapshots(id), { initialData })
}

export default hook
