import { Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'

import UptimeChart from '../../../pages/Dashboard/UptimeChart/UptimeChart'
import Icon from '../../General/Icon'
import DashboardCardWrapper from '../../../pages/Dashboard/DashboardCardWrapper'

const ConsensusUptimeCard = () => {
  return (
    <DashboardCardWrapper style={{ height: '156px', minWidth: '200px' }}>
      <YStack space={'$3'}>
        <YStack>
          <Text size={15} weight={'semibold'}>
            Consensus Uptime
          </Text>
          <XStack style={{ alignItems: 'end' }} space={'$2'}>
            <Text size={27} weight={'semibold'}>
              98%
            </Text>
            <Icon src="/icons/positive.svg" width={13} height={13}></Icon>
            <Text size={13} color="#E95460">
              1.56%
            </Text>
          </XStack>
        </YStack>
        <XStack height={'50%'} justifyContent="center" alignItems="center">
          <Stack
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <UptimeChart
              // monthlyActivity={monthlyActivity}
              // startMonth={0}
              // endMonth={1}
              // withLabels={false}
              startMonth={0}
              endMonth={3}
              monthlyActivity={[10, 1, 3, 4, 5, 1, 7, 1, 6, 3, 1, 9]}
              withLabels={true}
            />
          </Stack>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}
export default ConsensusUptimeCard
