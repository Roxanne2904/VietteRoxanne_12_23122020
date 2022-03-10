import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { formatUnit } from '../../CustomFormat/index'
import PropTypes from 'prop-types'

/**
 * It custom the tooltip bar chart.
 * @returns { HtmlElements } FormatTooltip's component.
 */

const FormatTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-Bartooltip">
        <p className="custom-Bartooltip__kilogram">
          {formatUnit(payload[1].value, 'kilogram')}
        </p>
        <p className="custom-Bartooltip__calories">
          {formatUnit(payload[0].value, 'calories')}
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
 * Add "+1" to XAxis ticks in order to they start to "1" and not "0".
 * @param { Number } ticks Ticks of XAxis as an integer.
 * @returns { Number } current tick + 1
 */

function formatXAxis(ticks) {
  return ticks + 1
}
//--------------------------
//--------------------------
/**
 * Display a Bar Chart with activity's datas from the API.
 * @return { HtmlElements } BarChart's component is displayed dynamically.
 */

function Barchart({ datas }) {
  // console.log(datas)
  const { sessions } = datas !== undefined && datas

  return (
    <div className="barChart">
      <span className="barChart__chartLabel">
        <h2 className="barChart__chartLabel__title">Activité quotidienne</h2>
        <div className="barChart__chartLabel__legend">
          <span className="barChart__chartLabel__legend__weight">
            <FontAwesomeIcon
              icon={faCircle}
              className="barChart__chartLabel__legend__weight__icon"
            />
            <span className="barChart__chartLabel__legend__weight__unit">
              Poids (kg)
            </span>
          </span>
          <span className="barChart__chartLabel__legend__calories">
            <FontAwesomeIcon
              icon={faCircle}
              className="barChart__chartLabel__legend__calories__icon barChart__chartLabel__legend__calories__icon--red"
            />
            <span className="barChart__chartLabel__legend__calories__unit">
              Calorie brûlées (kCal)
            </span>
          </span>
        </div>
      </span>

      <ResponsiveContainer width="95%" height={200}>
        <BarChart data={datas && sessions} width={200} height={200}>
          <CartesianGrid
            stroke="#DEDEDE"
            strokeDasharray="2 2"
            vertical={false}
          />
          <XAxis
            tickFormatter={formatXAxis}
            axisLine={false}
            tickLine={false}
            tickSize={20}
            tick={{ fill: '#9B9EAC', fontWeight: 700 }}
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickSize={10}
            tick={{ fill: '#9B9EAC', fontWeight: 700 }}
            type="number"
            domain={['dataMin-2', 'dataMax+1']}
            tickCount={3}
            dataKey="kilogram"
          />
          <YAxis yAxisId="left" dataKey="calories" hide={true} />

          <Tooltip
            content={<FormatTooltip />}
            cursor={{ fill: ' #C4C4C450' }}
            isAnimationActive={true}
          />
          <Bar
            type="monotone"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
            yAxisId="left"
          />
          <Bar
            type="monotone"
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            radius={[50, 50, 0, 0]}
            yAxisId="right"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

Barchart.propTypes = {
  datas: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ),
    userId: PropTypes.number.isRequired,
  }).isRequired,
}

export default Barchart
