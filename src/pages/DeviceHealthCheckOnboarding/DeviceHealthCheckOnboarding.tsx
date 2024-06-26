import { useSelector } from 'react-redux'
import { Stack, YStack } from 'tamagui'
import { CloseCircleIcon } from '@status-im/icons'
import { Button, InformationBox } from '@status-im/components'
import { useNavigate } from 'react-router-dom'

import PageWrapperShadow from '../../components/PageWrappers/PageWrapperShadow'
import NimbusLogo from '../../components/Logos/NimbusLogo'
import Titles from '../../components/General/Titles'
import DeviceStorageHealth from '../../components/Charts/DeviceStorageHealth'
import DeviceCPULoad from '../../components/Charts/DeviceCPULoad'
import HealthInfoSection from '../../components/General/HealthInfoSection'
import DeviceMemory from '../../components/Charts/DeviceMemoryHealth'
import DeviceNetworkHealth from '../../components/Charts/DeviceNetworkHealth'
import { RootState } from '../../redux/store'
import { PATHS } from '../../constants'
import styles from './deviceHealthCheckOnboarding.module.css'

const DeviceHealthCheckOnboarding = () => {
  const navigate = useNavigate()
  const deviceHealthState = useSelector(
    (state: RootState) => state.deviceHealth,
  )
  const navigateFlow = useSelector(
    (state: RootState) => state.navigationFLow.navigationFlow,
  )

  const continueHandler = () => {
    navigate(
      navigateFlow === 'pairDevice'
        ? PATHS.DEVICE_SYNC_STATUS
        : PATHS.VALIDATOR_ONBOARDING,
    )
  }
  return (
    <PageWrapperShadow
      rightImageSrc="./background-images/eye-background.png"
      imgHeight="100%"
    >
      <YStack
        space={'$4'}
        style={{
          alignItems: 'start',
          marginBottom: '2rem',
          maxWidth: '100%',
        }}
      >
        <NimbusLogo />
        <Titles
          title="Device Health Check"
          subtitle="Configure your device to start Staking on Nimbus"
          isAdvancedSettings={true}
        />
        <div className={styles['cards-container']}>
          <DeviceStorageHealth
            storage={deviceHealthState.storage}
            maxStorage={deviceHealthState.maxMemory}
          />
          <DeviceCPULoad load={deviceHealthState.cpuLoad} />
          <DeviceMemory
            currentMemory={deviceHealthState.memory}
            maxMemory={deviceHealthState.maxMemory}
          />
          <DeviceNetworkHealth latency={deviceHealthState.latency} />
        </div>
        <HealthInfoSection
          usedStorage={120}
          maxStorage={160}
          usedRamMemory={8}
          maxRamMemory={16}
          cpuClockRate={2.5}
          networkLatency={75}
        />
        <InformationBox
          icon={<CloseCircleIcon size={20} />}
          message="The information provided in the Nodes Health Check is meant to utilized as a guide to guage the readiness of your device, however please do your own due diligence prior to commiting any funds. Read our Health Check Disclosure for more information."
        />
        <Stack style={{ marginTop: '1rem', cursor: 'pointer' }}>
          <Button onPress={continueHandler}>Continue</Button>
        </Stack>
      </YStack>
    </PageWrapperShadow>
  )
}

export default DeviceHealthCheckOnboarding
