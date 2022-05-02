import React, { useState } from "react"
import { useRouter } from "next/router"
import SnapshotsChart from "components/SnapshotsChart"
import useCollectActivitySnapshots from "hooks/useCollectActivitySnapshots"
import useActivity, { getActivity } from "queries/activity"

const ActivityDetail = ({ initialData }) => {
  const { query: { id } } = useRouter()
  const { activity } = useActivity(id, initialData)
  const { snapshots, isLoading } = useCollectActivitySnapshots(id)
  const [highlight, setHighlight] = useState(null)

  return (
    <div>
      <h1>Activity {activity?.started_at}</h1>
      <div>{snapshots.length} snapshots</div>
      {!isLoading && <SnapshotsChart snapshots={snapshots} onHighlight={setHighlight} />}
      {!isLoading && <SnapshotsChart snapshots={snapshots} highlight={highlight} />}
    </div>
  )
}

export const getServerSideProps = async ({ params: { id } }) => {
  const initialData = await getActivity(id)

  return {
    props: { initialData }
  }
}

export default ActivityDetail
