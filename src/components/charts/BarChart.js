import React from 'react'
import { BarChart, XAxis, YAxis, Legend, Bar, Tooltip, Cell } from 'recharts'
import './chart-styles.css'
import _variables, { chartColours } from '../../styles/_variables'

const renderLegend = props => (
  <ul>
    {props.map((entry, index) => {
      return (
        <li key={`bar-item-${index}`}>
          <svg
            className="recharts-surface"
            width="14"
            height="14"
            viewBox="0 0 32 32"
            version="1.1"
          >
            <path
              stroke="none"
              fill={chartColours[index % chartColours.length]}
              d="M0,4h32v24h-32z"
              className="recharts-legend-icon"
            />
          </svg>
          <span className="recharts-legend-item-text"> {entry.name} - </span>
          <span style={{ color: _variables.darkGrey }}> {entry.value}%</span>
        </li>
      )
    })}
  </ul>
)

export default props => (
  <BarChart width={221} height={330} data={props.data} barCategoryGap={'3%'}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />

    <Bar dataKey="value">
      {props.data.map((entry, index) => {
        return <Cell key={`bar-cell-${index}`} fill={chartColours[index % chartColours.length]} />
      })}
    </Bar>

    <Legend
      content={() => renderLegend(props.data)}
      layout="vertical"
      width={220}
      height={120}
      verticalAlign="bottom"
    />
  </BarChart>
)
