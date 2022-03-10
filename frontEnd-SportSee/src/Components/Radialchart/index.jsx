import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

/**
 * Display a radial Chart with user datas from the API.
 * @return { HtmlElements } RadialsChart's component is displayed dynamically.
 */

function Radialchart({ datas }) {
  // console.log(datas)
  let { score, percentageScore } = datas[0] !== undefined && datas[0]

  let scoreData = [
    { score: 1, fill: ' #fbfbfb' },
    { score: score, fill: '#FF0000' },
  ]
  return (
    <div className="radial">
      <h2>Score</h2>
      <span>{percentageScore}</span>
      <span></span>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={500}
          height={500}
          innerRadius="40%"
          outerRadius="100%"
          barSize={10}
          data={scoreData}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            dataKey="score"
            cornerRadius={10}
            fill={'pink'}
            background={{ fill: 'white' }}
            style={{ borderRadius: '10px' }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

Radialchart.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      keyData: PropTypes.objectOf(PropTypes.string),
      percentageScore: PropTypes.string,
      score: PropTypes.number.isRequired,
      userInfos: PropTypes.shape({
        age: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
}

export default Radialchart
