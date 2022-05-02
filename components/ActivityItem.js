import Box from "components/Box"
import PowerCurveChart from "components/PowerCurveChart"
import { startCase } from "lodash"
import moment from "moment"

const ActivityItem = ({ activity }) => {
  return (
    <div>
      <h2>Activity title</h2>
      <b>
        {startCase(activity.sport)} activity on {moment(activity.started_at).format("MMM Do, YYYY [at] h:mm a")}
      </b>
      <Box
        flex
        flexColumn
        css={{
          width: "100%",
          height: "700px",
        }}
      >
        <PowerCurveChart powerCurve={activity.power_curve} />
      </Box>
    </div>
  )
}

export default ActivityItem
