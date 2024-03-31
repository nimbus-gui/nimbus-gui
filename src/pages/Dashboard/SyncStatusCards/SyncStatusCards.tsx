import { Separator, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import DashboardCardWrapper from '../DashboardCardWrapper'
import ExecutionClientCard from './ExecutionClientCard'
import ConsensusCard from './ConsensusClientCard'

const SyncStatusCards = () => {
  return (
    <DashboardCardWrapper padding="0" minWidth="200px" height="100%">
      <YStack space={'$3'}>
        <div style={{ padding: '8px 16px' }}>
          <Text size={19} weight={'semibold'}>
            Sync Status
          </Text>
        </div>

        <YStack>
          <ExecutionClientCard value={153.424} total={170} />
          <Separator borderColor={'#e3e3e3'} />

          <ConsensusCard value={103.424} total={170} />
        </YStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default SyncStatusCards
