import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

type DataItem = {
  name?: string
  pa: number
  pv: number
}

type UptimeChartProps = {
  data: DataItem[]
}

const UptimeChart = ({ data }: UptimeChartProps) => {
  return (
    <ResponsiveContainer  >
      <BarChart
        data={data}
        style={{ backgroundColor: '#F0F2F5' }}
      >
        <Bar dataKey="pv" barSize={2} fill="#E95460" />
        {/* @NOTE: We can add as many Bar items as we need and use them for each day of the month */}
        <Bar dataKey="pa" barSize={2} fill="#E95460" />
        {data[0].name && (
          <XAxis dataKey="name" fontSize={'10px'} tickMargin={10} />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default UptimeChart