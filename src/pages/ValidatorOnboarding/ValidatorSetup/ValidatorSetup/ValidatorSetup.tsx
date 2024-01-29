import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import PairedDeviceCard from '../ConsensusClient/PairedDeviceCard'
import LinkWithArrow from '../../../../components/General/LinkWithArrow'
import ExecClientCards from './ExecClientCards'

const ValidatorSetup = () => {
  return (
    <YStack
      style={{ width: '100%', padding: '26px 32px' }}
      minHeight={'65vh'}
      justifyContent={'space-between'}
    >
      <XStack
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap="wrap"
        space={'$8'}
      >
        <Text size={27} weight={'semibold'}>
          Validator Setup
        </Text>
        <PairedDeviceCard />
      </XStack>
      <YStack>
        <Stack style={{ marginBottom: '4px' }}>
          <Text size={13} color="#647084" weight={'semibold'}>
            Execution Client Detection
          </Text>
        </Stack>
        <Text size={15}>
          No existing execution client installations have been detected on
          paired device.
        </Text>
        <Text size={13} color="#828282">
          If you believe this to be incorrect please test your pairing to the
          correct device and try again.
        </Text>
      </YStack>
      <ExecClientCards />
      <LinkWithArrow
        to="/"
        text="View Execution client comparison chart"
        style={{ marginTop: '6%', fontWeight: 'bold' }}
      />
    </YStack>
  )
}

export default ValidatorSetup
