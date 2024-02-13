import { XStack, Stack, Text as TextTam, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import PairedDeviceCard from './PairedDeviceCard'
import ConsensusGaugeCard from './ConsensusGaugeCard'
import ConsensusClientCard from './ConsensusClientCard'
import LinkWithArrow from '../../../../components/General/LinkWithArrow'

import { useWindowSize } from '../../../../hooks/useWindowSize'

const ConsensusSelection = () => {
  const windowSize = useWindowSize()
  const selectedClient = 'Nimbus'

  const clients = [
    {
      name: selectedClient,
      icon: '/icons/nimbus-disabled.svg',
    },
  ]

  return (
    <YStack style={{ width: '100%', padding: '32px' }} minHeight={'65vh'}>
      <XStack
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={'30px'}
        flexWrap="wrap"
      >
        <Text size={27} weight={'semibold'}>
          Client Setup
        </Text>
        <XStack
          space={'$2'}
          flexWrap={windowSize.width < 735 ? 'wrap' : 'nowrap'}
          marginTop={windowSize.width < 735 ? '20px' : 0}
          width={windowSize.width < 580 ? '100%' : 'auto'}
        >
          <PairedDeviceCard />

          <ConsensusGaugeCard
            color="blue"
            synced={134879}
            title="Execution Sync Status"
            total={150000}
          />
        </XStack>
      </XStack>

      <YStack mb={'50px'}>
        <Stack style={{ marginBottom: '4px' }}>
          <Text size={13} color="#647084">
            Consensus Client Detection
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

      <TextTam
        fontSize={19}
        style={{ marginLeft: 0, marginTop: '50px', marginBottom: '25px' }}
      >
        Install Consensus client
      </TextTam>

      <XStack space={'$8'} flexWrap="wrap">
        <ConsensusClientCard name={clients[0].name} icon={clients[0].icon} />
        <YStack width={windowSize.width < 780 ? '100%' : '70%'} space={'$4'}>
          <Text size={19}>The resource efficient Ethereum Clients.</Text>
          <Text size={15}>
            {selectedClient} is a client implementation for both execution and
            consensus layers that strives to be as lightweight as possible in
            terms of resources used. This allows it to perform well on embedded
            systems, resource-restricted devices -- including Raspberry Pis --
            and multi-purpose servers.
          </Text>
          <Text size={19} weight={'semibold'}>
            <LinkWithArrow
              textColor="black"
              text="Nimbus Documentation"
              style={{ fontSize: '15px' }}
              arrowRight={true}
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Text>
        </YStack>
      </XStack>
    </YStack>
  )
}

export default ConsensusSelection
