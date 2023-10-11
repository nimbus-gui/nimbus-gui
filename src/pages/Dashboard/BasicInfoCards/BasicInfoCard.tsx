import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import DashboardCardWrapper from '../DashboardCardWrapper'

type BasicInfoCardProps = {
  title: string
  value: string
}

const BasicInfoCard = ({ title, value }: BasicInfoCardProps) => {
  return (
    <DashboardCardWrapper width="100%">
      <YStack
        style={{
          width: '100%',
        }}
      >
        <Text size={15} weight={'semibold'}>
          {title}
        </Text>
        <Text size={27} weight={'semibold'}>
          {value}
        </Text>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default BasicInfoCard