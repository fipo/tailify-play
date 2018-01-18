import React from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts'
import './chart-styles.css'
import _variables, { chartColours } from '../../styles/_variables'

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.4
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const CustomizedLegend = props => (
  <ul>
    {props.payload.map((entry, index) => (
      <li key={`item-${index}`}>
        <svg className="recharts-surface" width="14" height="14" viewBox="0 0 32 32" version="1.1">
          <path
            stroke="none"
            fill={entry.color}
            d="M0,4h32v24h-32z"
            className="recharts-legend-icon"
          />
        </svg>
        <span className="recharts-legend-item-text"> {entry.value} - </span>
        <span style={{ color: _variables.darkGrey }}>{entry.payload.value}</span>
      </li>
    ))}
  </ul>
)

export default props => (
  <PieChart width={221} height={330}>
    <Pie
      data={props.data}
      dataKey="followers"
      cy="40%"
      outerRadius={60}
      nameKey="name"
      labelLine={true}
      label={renderCustomizedLabel}
    >
      {props.data.map((entry, index) => (
        <Cell key={`pie-cell-${index}`} fill={chartColours[index % chartColours.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend
      content={CustomizedLegend}
      layout="vertical"
      width={220}
      height={120}
      verticalAlign="bottom"
    />
  </PieChart>
)
