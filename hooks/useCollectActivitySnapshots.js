import { useEffect, useState } from "react"
import { getActivitySnapshots } from "queries/activitySnapshots"

const useCollectActivitySnapshots = (id) => {
  const [t, setT] = useState(0)
  const [hasRemaining, setHasRemaining] = useState(true)
  const [snapshotList, setSnapshotList] = useState([])

  useEffect(() => {
    if (hasRemaining) {
      getActivitySnapshots(id, t).then(({ snapshots, remaining }) => {
        console.log(snapshots.length)
        setSnapshotList(snapshotList.concat(snapshots))
        setHasRemaining(remaining !== 0)
        if (snapshots.length > 0) {
          setT(snapshots[snapshots.length - 1].t)
        }
      })
    } else {
      setSnapshotList(snapshotList.sort((a, b) => a.t - b.t))
    }
  }, [id, t, hasRemaining])

  return { snapshots: snapshotList, isLoading: hasRemaining }
}

export default useCollectActivitySnapshots
