import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"
import {
  Borders,
  FlexibleWidthXYPlot,
  Crosshair,
  LineSeries,
  Highlight,
  XAxis,
  YAxis
} from "react-vis"

import { styled } from "styles/theme"
import Box from "components/Box"

const formatTimeLabel = (seconds) => {
  let parts = []
  if (seconds > 3600) {
    parts.push(Math.floor(seconds / 3600), "hr")
    seconds = seconds % 3600
  }
  if (seconds > 60) {
    parts.push(Math.floor(seconds / 60), "min")
    seconds = seconds % 60
  }
  if (seconds > 0) {
    parts.push(Math.round(seconds), "sec")
  }
  return parts.join(" ")
}

const formatTimeLabelHMS = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  seconds = seconds % 3600
  const minutes = Math.floor(seconds / 60)
  seconds = seconds % 60
  const seconds = Math.floor(seconds)
  return [hours, minutes, seconds].map((n) => n.toFixed().padStart(2, "0")).join(":")
}

const CrosshairContainer = styled("div", {
  borderRadius: "0.25rem",
  boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
  background: "white",
  whiteSpace: "nowrap",
  padding: "0.5rem",
  margin: "0.75rem 0.5rem"
})

const SnapshotsChart = ({
  displayTimeHMS,
  highlight,
  showIdleTime,
  showHeartRate,
  showPower,
  snapshots,
  xAxisDistance,
  onHighlight
}) => {
  const [hint, setHint] = useState(null)

  const powerData = useMemo(() => {
    return snapshots.map(({ cumulative_distance, t, power }) => ({
      x: xAxisDistance ? cumulative_distance : t / 60,
      y: power
    }))
  }, [xAxisDistance, snapshots])

  const heartRateData = useMemo(() => {
    return snapshots.map(({ cumulative_distance, t, heart_rate }) => ({
      x: xAxisDistance ? cumulative_distance : t / 60,
      y: heart_rate
    }))
  }, [xAxisDistance, snapshots])

  const onHoverDataPoint = (value, { index }) => {
    setHint([
      {
        x: value.x,
        y: powerData[index].y,
      },
      {
        x: value.x,
        y: heartRateData[index].y
      }
    ])
  }

  return (
    <Box>
      <FlexibleWidthXYPlot
        height={400}
        onMouseLeave={() => setHint(null)}
        xDomain={highlight && [highlight.left, highlight.right]}
      >
        {showPower && (
          <LineSeries
            strokeWidth={1}
            data={powerData}
            onNearestX={onHoverDataPoint}
          />
        )}
        {showHeartRate && (
          <LineSeries
            color="#f00"
            strokeWidth={1}
            data={heartRateData}
          />
        )}

        {!!onHighlight && (
          <Highlight
            drag
            enableY={false}
            onBrushEnd={area => onHighlight(area)}
            onDragEnd={area => onHighlight(area)}
          />
        )}

        {hint && (
          <Crosshair
            values={hint}
            align={{
              horizontal: "right",
              vertical: "topEdge"
            }}
          >
            <CrosshairContainer>
              <table>
                <tbody>
                  {showPower && (
                    <tr>
                    <td>Power</td>
                    <td style={{ paddingLeft: "1rem" }}>{hint[0].y} W</td>
                  </tr>
                  )}
                  {showHeartRate && (
                    <tr>
                      <td>Heart rate</td>
                      <td style={{ paddingLeft: "1rem" }}>{hint[1].y} bpm</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CrosshairContainer>
          </Crosshair>
        )}
        <Borders
          style={{
            bottom: {fill: '#fff'},
            left: {fill: '#fff'},
            right: {fill: '#fff'},
            top: {fill: '#fff'}
          }}
        />
        <XAxis
          position="middle"
          tickFormat={(value) => {
            if (xAxisDistance) {
              return `${value} km`
            } else {
              return displayTimeHMS ? formatTimeLabelHMS(value * 60) : formatTimeLabel(value * 60)
            }
          }}
        />
        <YAxis />
      </FlexibleWidthXYPlot>
    </Box>
  )
}

SnapshotsChart.propTypes = {
  highlight: PropTypes.object,
  showHeartRate: PropTypes.bool,
  showPower: PropTypes.bool,
  snapShots: PropTypes.arrayOf(PropTypes.object),
  onHighlight: PropTypes.func,
  xAxisDistance: PropTypes.bool,
  displayTimeHMS: PropTypes.bool
}

SnapshotsChart.defaultProps = {
  displayTimeHMS: true,
  showHeartRate: true,
  showPower: true,
  xAxisDistance: false
}

export default SnapshotsChart
