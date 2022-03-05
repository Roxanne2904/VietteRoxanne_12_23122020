/**
 * Display a Bar Chart with activity's datas from the API.
 * @return { HtmlElements } BarChart's component is displayed dynamically.
 */

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
// const data = [
//   { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 200, pv: 2400, amt: 2400 },
//   { name: 'Page C', uv: 500, pv: 2400, amt: 2400 },
//   { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
//   { name: 'Page E', uv: 700, pv: 2400, amt: 2400 },
//   { name: 'Page F', uv: 500, pv: 2400, amt: 2400 },
// ]
// console.log(data)

const FormatTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip__kilogram">
          {formatUnit(payload[1].value, 'kilogram')}
        </p>
        <p className="custom-tooltip__calories">
          {formatUnit(payload[0].value, 'calories')}
        </p>
      </div>
    )
  }

  return null
}

function formatXAxis(tick) {
  return tick + 1
}

function Barchart({ datas }) {
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
            // hide={true}
            // allowDataOverflow={true}
            // interval={[1]}
            // unit="kg"
          />
          <YAxis
            yAxisId="left"
            dataKey="calories"
            hide={true}
            // orientation="right"
            // axisLine={false}
            // tickLine={false}
            // tickSize={30}
            // ticks={[70]}
            // allowDataOverflow={true}
            // interval={[1]}
            // unit="kg"
          />

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
export default Barchart
