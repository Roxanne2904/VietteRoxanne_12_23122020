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
// const data = [
//   { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 200, pv: 2400, amt: 2400 },
//   { name: 'Page C', uv: 500, pv: 2400, amt: 2400 },
//   { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
//   { name: 'Page E', uv: 700, pv: 2400, amt: 2400 },
//   { name: 'Page F', uv: 500, pv: 2400, amt: 2400 },
// ]
// console.log(data)
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    )
  }

  return null
}

function Barchart({ userActivity }) {
  console.log(userActivity)
  const { datas } = userActivity
  let test = datas && datas.data !== undefined

  return (
    test !== false && (
      <section id="charts" className="h1">
        <span>{datas && datas.data.userId}</span>
        <span>
          <h2>Activité quotidienne</h2>
          <div>
            <span>
              <FontAwesomeIcon icon={faCircle} />
              {`Poids (kg)`}
            </span>
            <span>
              <FontAwesomeIcon icon={faCircle} />
              {`Calorie brûlées (kCal)`}
            </span>
          </div>
        </span>

        <ResponsiveContainer width="95%" height={200}>
          <BarChart
            data={datas && datas.data.sessions}
            width={200}
            height={200}
          >
            <CartesianGrid
              stroke="#DEDEDE"
              strokeDasharray="2 2"
              vertical={false}
            />
            <XAxis
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
              // tickFormatter={formatYAxis}
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
              // tickFormatter={formatYAxis}
              // ticks={[70]}
              // allowDataOverflow={true}
              // interval={[1]}
              // unit="kg"
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: ' #C4C4C450' }}
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
      </section>
    )
  )
}
export default Barchart
