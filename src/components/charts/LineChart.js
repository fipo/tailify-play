import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { chartColours } from '../../styles/_variables'

export default props => (
  <LineChart
    width={728}
    height={200}
    data={props.data}
    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <YAxis yAxisId="likes" />
    <YAxis yAxisId="comments" orientation="right" />
    <Tooltip />
    <Legend />
    <Line yAxisId="likes" type="monotone" dataKey="Likes" stroke={chartColours[6]} />
    <Line yAxisId="comments" type="monotone" dataKey="Comments" stroke={chartColours[2]} />
  </LineChart>
)
