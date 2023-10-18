import { Avatar, Tabs, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { useSelector } from 'react-redux'

import AddCard from '../AddCards/AddCard'
import ValidatorsList from './ValidatorsList'
import AlertsList from './AlertsList'
import LogsList from './LogsList'
import { getFormattedWalletAddress } from '../../../utilities'

const RightSidebar = () => {
  const countOfValidators = useSelector((state: any) => state.rightSidebar.countOfValidators)

  return (
    <YStack
      width={'320px'}
      space={'$4'}
      backgroundColor={'#FFF'}
      style={{
        padding: '8px',
        border: '1px solid #F0F2F5',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <XStack alignItems="center">
        <Avatar type="user" size={32} name="Etherium Mainnet" />
        <YStack pl="8px">
          <Text size={15} weight={'semibold'}>
            Ethereum Mainnet
          </Text>
          <Text size={13}>{getFormattedWalletAddress('0xb9dc35')}</Text>
        </YStack>
      </XStack>
      <XStack space={'$2'} alignItems="center" justifyContent="space-between">
        <YStack
          backgroundColor={'#2A4AF5'}
          style={{
            padding: '8px 12px',
            borderRadius: '16px',
            flexGrow: '1',
            height: 'max-fit',
          }}
        >
          <Text size={15} weight={'semibold'} color={'#FFF'}>
            💎 Diamond Hands
          </Text>
          <Text size={27} weight={'semibold'} color={'#FFF'}>
            $0.00
          </Text>
          <XStack space={'$1.5'} alignItems={'center'}>
            <Text size={13} color={'#bac7fb'}>
              0%
            </Text>
            <Text size={13} color={'#bac7fb'}>
              .
            </Text>
            <Text size={13} color={'#bac7fb'}>
              $0
            </Text>
          </XStack>
        </YStack>
        <AddCard style={{ padding: '0 2vw' }} />
      </XStack>
      <XStack justifyContent={'space-between'} width={'85%'}>
        <Text size={19} weight={'semibold'}>
          Validators
        </Text>
        <Text size={19} weight={'semibold'}>
          {countOfValidators}
        </Text>
      </XStack>
      <Tabs defaultValue="active">
        <Tabs.List size={32}>
          <Tabs.Trigger type="default" value="active">
            Active
          </Tabs.Trigger>
          <Tabs.Trigger type="default" value="pending">
            Pending
          </Tabs.Trigger>
          <Tabs.Trigger type="default" value="inactive">
            Inactive
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="active">
          <ValidatorsList />
        </Tabs.Content>
        <Tabs.Content value="pending">
          <ValidatorsList />
        </Tabs.Content>
        <Tabs.Content value="inactive">
          <ValidatorsList />
        </Tabs.Content>
      </Tabs>
      <AlertsList />
      <LogsList />
    </YStack>
  )
}

export default RightSidebar