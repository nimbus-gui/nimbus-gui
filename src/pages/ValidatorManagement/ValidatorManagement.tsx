import { Text } from '@status-im/components'
import ManagementTabs from './ManagementTabs'
import ManagementHeader from './ManagementHeader'
import SidebarsWrapper from '../../components/PageWrappers/SidebarsWrapper'
import DeviceUptime from '../Dashboard/DeviceUptime/DeviceUptime'
import ConsensusUptimeCard from '../Dashboard/ConsensusUptime/ConsensusUptimeCard'
import ExecutionUptime from '../Dashboard/ExecutionUptime/ExecutionUptime'
import BasicInfoCard from '../Dashboard/BasicInfoCards/BasicInfoCard'
import styles from './validatorManagement.module.css'
import { useWindowSize } from '../../hooks/useWindowSize'

const ValidatorManagement = () => {
  const { width } = useWindowSize()

  return (
    <SidebarsWrapper isNotBottomPadding={true}>
      <div className={`${styles['main-container']} transparent-scrollbar`}>
        <ManagementHeader />
        <div className={styles['cards-container']}>
          <DeviceUptime
            style={{ flex: 1, minHeight: '100%' }}
            chartHeight="78%"
          />
          <div className={styles['right-cards-container']}>
            <div className={styles['charts-container']}>
              <ConsensusUptimeCard />
              <ExecutionUptime />
            </div>
            <div className={styles['basic-info-cards-container']}>
              <BasicInfoCard
                style={{ height: 'calc(50% - 8px)' }}
                title="Network Validators"
                value="498,156"
              />
              <BasicInfoCard
                style={{ height: 'calc(50% - 8px)' }}
                title="Queue"
                value="145"
              />
            </div>
          </div>
        </div>
        <Text size={27} weight={'semibold'}>
          Validators
        </Text>
        <ManagementTabs />
      </div>
    </SidebarsWrapper>
  )
}

export default ValidatorManagement
