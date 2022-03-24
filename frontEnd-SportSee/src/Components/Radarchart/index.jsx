import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Display a radar Chart with perfomance datas from the API.
 * @return { HtmlElements } RadarsChart's component is displayed dynamically.
 */

function Radarchart({ datas }) {
  const { data } = datas !== undefined && datas

  return (
    <article className="radarChart">
      <ResponsiveContainer min-width="30%" max-width="33%" height="100%">
        <RadarChart
          outerRadius={80}
          width={730}
          height={250}
          data={data}
          startAngle={210}
          endAngle={570}
        >
          <PolarGrid
            radialLines={false}
            gridType="polygon"
            polarRadius={[10, 23, 40, 60]}
            stroke="#fff"
          />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

Radarchart.propTypes = {
  datas: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
      })
    ),
    kind: PropTypes.objectOf(PropTypes.string),
    userId: PropTypes.number.isRequired,
  }).isRequired,
}

export default Radarchart
