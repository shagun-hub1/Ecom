import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,datakey,grid}) => {
  
      
  return (
    <div className='p-6 m-6 shadow-md'>
        <h3 className='font-extrabold text-lg'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart
            data={data}
            >
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey={datakey} stroke="#5550bd"  />
            <Tooltip/>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart