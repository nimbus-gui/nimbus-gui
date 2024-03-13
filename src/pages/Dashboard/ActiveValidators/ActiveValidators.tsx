import { Text } from '@status-im/components'
import { Separator, Stack, XStack, YStack } from 'tamagui'
import DashboardCardWrapper from '../DashboardCardWrapper'

const ActiveValidators = () => {
  return (
    <DashboardCardWrapper padding="0" height="156px" minWidth="200px">
      <img
        src="/images/validators-count.png"
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100px',
        }}
      />

      <YStack height="100%">
        <Stack
          style={{ minHeight: '90px', padding: '12px 16px', flex: 1 }}
          justifyContent="space-between"
        >
          <Text size={19} weight={'semibold'}>
            Active Validators
          </Text>

          <Text size={27} weight={'semibold'}>
            6
          </Text>
        </Stack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack style={{ padding: '12px 16px' }}>
          <Text size={13} weight={'semibold'} color="#09101C">
            Manage Validator
          </Text>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default ActiveValidators