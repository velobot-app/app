import React from "react"
import useActivities, { getActivities } from "queries/activities"
import ActivityItem from "components/ActivityItem"

const Activities = ({ initialData }) => {
  const { data: { activities } } = useActivities(initialData)

  return activities.map((activity) => (
      <React.Fragment key={activity.id}>
        <ActivityItem activity={activity} />
      </React.Fragment>
    )
  )
}

export const getServerSideProps = async () => {
  const initialData = await getActivities()

  return {
    props: { initialData }
  }
}

export default Activities
