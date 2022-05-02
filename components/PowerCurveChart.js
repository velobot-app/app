import { VictoryChart, VictoryLine, VictoryVoronoiContainer } from "victory"
import victoryTheme from "styles/victory"
import { duration } from "moment"

const humanizedDuration = (seconds) => {
  let d = duration(seconds, "seconds")

  if (d.hours() > 0) {
    return `${d.hours()}h`
  } else if (d.minutes() > 0) {
    return `${d.minutes()}m`
  } else {
    return `${d.seconds()}s`
  }
}

const PowerCurveChart = ({ powerCurve }) => {
  const chartData = powerCurve.map((reading) => {
    return {
      x: humanizedDuration(reading[0]),
      y: reading[1]
    }
  })

  const containerComponent = (
    <VictoryVoronoiContainer
      labels={({ datum }) => `${datum.x}: ${Math.round(datum.y)}W`}
    />
  )

  return (
    <VictoryChart
      theme={victoryTheme}
      domainPadding={{ y: 50 }}
      width={1000}
      height={400}
      containerComponent={containerComponent}
    >
      <VictoryLine data={chartData} />
    </VictoryChart>
  )
}

export default PowerCurveChart
