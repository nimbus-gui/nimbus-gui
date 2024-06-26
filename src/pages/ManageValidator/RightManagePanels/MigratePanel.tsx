import { Button, InformationBox, Input, Text } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { XStack, YStack } from 'tamagui'
import { useState } from 'react'

import KeystoreBackupsCard from '../../../components/General/KeystoreBackupsCard'
import PanelWrapper from './PanelWrapper'
import PanelImage from './PanelImage'

const MigratePanel = () => {
  const [isVisibleWarning, setIsVisibleWarning] = useState(true)
  const [keymanagerApi, setKeymanagerApi] = useState('')

  const migrateValidatorHandler = () => {}

  const onChangeKeymanagerApi = (value: string) => {
    setKeymanagerApi(value)
  }

  return (
    <PanelWrapper title={'Migrate Validator'}>
      <PanelImage
        imagePath={'migrate.png'}
        text="You are about to Migrate your validator it is not possible for you
            to revert this action! Please make sure you understand the
            consequences."
      />
      <KeystoreBackupsCard isSelected={true} />
      <YStack space={'$2'} width={'100%'}>
        <Text size={13} color={'#647084'} weight={'semibold'}>
          Keymanager API
        </Text>
        <Input
          value={keymanagerApi}
          onChangeText={onChangeKeymanagerApi}
          placeholder="Specify URL to keymanager API for node being transfered"
        />
      </YStack>
      <div style={{ width: '100%' }}>
        {isVisibleWarning && (
          <InformationBox
            message="Please make sure to enforce the file on another node to continue validating with your Validator."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
            onClosePress={() => setIsVisibleWarning(false)}
          />
        )}
      </div>
      <XStack
        style={{ width: '100%', justifyContent: 'end', marginTop: '6px' }}
      >
        <Button onPress={migrateValidatorHandler}>Migrate Validator</Button>
      </XStack>
    </PanelWrapper>
  )
}

export default MigratePanel
