import { XStack } from 'tamagui'
import KeyGenerationSyncCard from './KeyGenerationSyncCard'
import KeyGenerationTitle from './KeyGenerationTitle'

const KeyGenerationHeader = () => {
  return (
    <XStack style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
      <KeyGenerationTitle />
      <XStack space={'$2'}>
        <KeyGenerationSyncCard synced={123.524} total={172.503} title="Execution Sync Status" />
        <KeyGenerationSyncCard synced={123.524} total={172.503} title="Consensus Sync Status" />
      </XStack>
    </XStack>
  )
}

export default KeyGenerationHeader
