import { Stack } from 'tamagui'

import BasicInfoCard from './BasicInfoCard'

const BasicInfoCards = () => {
  return (
    <Stack
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1vw',
        width: '100%',
      }}
    >
      <BasicInfoCard title="Avg. Effectiveness" value="4" />
      <BasicInfoCard title="At Headslot" value="-6" />
      <BasicInfoCard title="Participation Rate" value="6" />
      <BasicInfoCard title="Current Slot" value="8,018,400" />
    </Stack>
  )
}

export default BasicInfoCards
