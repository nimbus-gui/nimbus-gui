import { XStack, Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import PairedDeviceCard from './PairedDeviceCard'
import ConsensusClientCard from './ConsensusClientCard'
import LinkWithArrow from '../../../../components/General/LinkWithArrow'
import SyncStatusCard from '../../../../components/General/SyncStatusCard'
import styles from './consensusSelection.module.css'

const clients = [
  {
    name: 'Nimbus',
    icon: '/icons/nimbus-disabled.svg',
  },
]

const ConsensusSelection = () => {
  const selectedClient = clients[0]

  return (
    <YStack className={styles['main-container']}>
      <div className={styles['header-container']}>
        <Text size={27} weight={'semibold'}>
          Client Setup
        </Text>
        <div className={styles['header-cards-container']}>
          <PairedDeviceCard />
          <SyncStatusCard
            synced={123.524}
            total={172.503}
            title="Execution Sync Status"
            color="#2a4af5"
          />
        </div>
      </div>
      <YStack marginBottom={'40px'}>
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
      <Text size={27}>Install Consensus client</Text>
      <XStack space={'$8'} marginTop={'20px'} flexWrap="wrap">
        <ConsensusClientCard
          name={selectedClient.name}
          icon={selectedClient.icon}
        />
        <YStack className={styles['card-description-texts']} space={'$4'}>
          <Text size={19}>The resource efficient Ethereum Clients.</Text>
          <Text size={15}>
            {selectedClient.name} is a client implementation for both execution
            and consensus layers that strives to be as lightweight as possible
            in terms of resources used. This allows it to perform well on
            embedded systems, resource-restricted devices -- including Raspberry
            Pis -- and multi-purpose servers.
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
