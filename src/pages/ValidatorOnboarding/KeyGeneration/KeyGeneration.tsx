import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'

import KeyGenerationHeader from './KeyGenerationHeader/KeyGenerationHeader'
import RecoveryMechanism from './RecoveryMechanism/RecoveryMechanism'
import KeystoreFiles from './KeystoreFiles/KeystoreFiles'
import RecoveryPhrase from './RecoveryPhrase'
import ConfirmRecoveryPhrase from './ConfirmRecoveryPhrase/ConfirmRecoveryPhrase'
import {
  BOTH_KEY_AND_RECOVERY,
  KEYSTORE_FILES,
  RECOVERY_PHRASE,
} from '../../../constants'
import { RootState } from '../../../redux/store'

const KeyGeneration = () => {
  const { recoveryMechanism, isConfirmPhraseStage } = useSelector(
    (state: RootState) => state.keyGeneration,
  )

  const isKeystoreFiles =
    recoveryMechanism === KEYSTORE_FILES ||
    recoveryMechanism === BOTH_KEY_AND_RECOVERY

  const isRecoveryPhrase =
    recoveryMechanism === RECOVERY_PHRASE ||
    recoveryMechanism === BOTH_KEY_AND_RECOVERY

  return (
    <YStack
      space={'$2'}
      style={{ width: '100%', padding: '16px 32px', alignItems: 'start' }}
    >
      {isConfirmPhraseStage && <ConfirmRecoveryPhrase />}
      {isConfirmPhraseStage === false && (
        <>
          <KeyGenerationHeader />
          <RecoveryMechanism recoveryMechanism={recoveryMechanism} />
          <Stack style={{ margin: '30px 0' }}>
            <Text size={27} weight={'semibold'}>
              4 Validators
            </Text>
          </Stack>
          {isKeystoreFiles && <KeystoreFiles />}
          {isRecoveryPhrase && (
            <RecoveryPhrase isKeystoreFiles={isKeystoreFiles} />
          )}
        </>
      )}
    </YStack>
  )
}

export default KeyGeneration
