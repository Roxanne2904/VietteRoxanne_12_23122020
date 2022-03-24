import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { formatUnit } from '../../CustomFormat/index'
import { formatDay } from '../../CustomFormat/index'
import PropTypes from 'prop-types'

/**
 * It custom tooltip from this line chart.
 * @return { HtmlElements } FormatTooltip's component is displayed.
 */

const FormatTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-Linetooltip">
        <p className="custom-Linetooltip__minutes">
          {formatUnit(payload[0].value, 'sessionLength')}
        </p>
      </div>
    )
  }

  return null
}

FormatTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
//--------------------------
//--------------------------
/**
 * It turn XAxis's ticks, currently numbers, into letters.
 * @param { Number } number_nbTicks Ticks of XAxis as an integer.
 * @returns { String } if ticks was "1" it will be returned as "L"
 */
function formatTicks(number_nbTicks) {
  return formatDay(number_nbTicks)
}
//--------------------------
//--------------------------
/**
 * It Create a rectangle and circles when the dot, from the chart, is active.
 * @return { HtmlElements } Rectangle's component is displayed.
 */

function Rectangle({ cx, cy }) {
  return (
    <svg>
      <rect
        x={cx}
        y={0}
        width="100%"
        height="100%"
        fill="#00000030"
        rx="5"
        ry="5"
      />
      <circle cx={cx} cy={cy} r="9" fill="#FFFFFF50" />
      <circle cx={cx} cy={cy} r="4" fill="#FFFFFF" />
    </svg>
  )
}

Rectangle.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
}
//--------------------------
//--------------------------
/**
 * Display a line Chart with average sessions's datas from the API.
 * @return { HtmlElements } SimpleLineChart's component is displayed dynamically.
 */

function Linechart({ datas }) {
  const { sessions } = datas !== undefined && datas

  return (
    <article className="lineChart">
      <h2 className="lineChart__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer
        className="lineChart__responsiveContainer"
        min-width="30%"
        max-width="33%"
        height="100%"
      >
        <LineChart data={datas && sessions} margin={0}>
          <Tooltip
            content={<FormatTooltip />}
            allowEscapeViewBox={{ x: true, y: true }}
            cursor={false}
            wrapperStyle={{ top: -55, left: -7 }}
          />
          <XAxis dataKey="day" scale="band" hide={true} />
          <XAxis
            dataKey="day"
            scale="band"
            // hide={true}
            tickFormatter={formatTicks}
            tickMargin={-6}
            tick={{ fill: '#FFFFFF60', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
            xAxisId={'day'}
          />

          <YAxis
            type="number"
            domain={['dataMin-20', 'dataMax+45']}
            hide={true}
          />
          <defs>
            <linearGradient id="linear" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.1} />
              <stop offset="10%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity={0.5} />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.8} />
              <stop offset="96%" stopColor="#FFFFFF" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#linear)"
            activeDot={Rectangle}
            dot={false}
            strokeWidth={2.3}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* <div className="lineChart__weekDaysTicks">
        <ul className="lineChart__weekDaysTicks__ul">
          {sessions.map((nb) => (
            <li key={`${formatDay(nb.day)}-${nb.day}`}>{formatDay(nb.day)}</li>
          ))}
        </ul>
      </div> */}
    </article>
  )
}

Linechart.propTypes = {
  datas: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        sessionLength: PropTypes.number.isRequired,
      })
    ),
    userId: PropTypes.number.isRequired,
  }).isRequired,
}

export default Linechart
