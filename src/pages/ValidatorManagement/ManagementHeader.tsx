import { XStack } from 'tamagui'

import TitleLogo from '../../components/General/TitleLogo'
import SyncStatusCard from '../../components/General/SyncStatusCard'

const ManagementHeader = () => {
  return (
    <XStack style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
      <TitleLogo subtitle="Validator Management" />
      <XStack space={'$2'}>
        <SyncStatusCard
          synced={123.524}
          total={172.503}
          title="Execution Sync Status"
          color="#2a4af5"
        />
        <SyncStatusCard
          synced={123.524}
          total={172.503}
          title="Consensus Sync Status"
          color="#ff6161"
        />
      </XStack>
    </XStack>
  )
}

export default ManagementHeader
