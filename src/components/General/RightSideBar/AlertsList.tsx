import { InformationBox, Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import { CloseCircleIcon, ChevronRightIcon } from '@status-im/icons'
import { useEffect, useState } from 'react'

type Alert = {
  message: string
  variant: 'default' | 'information' | 'error'
}

const AlertsList = () => {
  const [alerts, setAlerts] = useState([] as Alert[])

  useEffect(() => {
    setAlerts([
      {
        message: 'Network: Participation rate below 66%',
        variant: 'default',
      },
      {
        message: 'Node: 32 Peers Connected',
        variant: 'information',
      },
      {
        message: 'Node / Validator: Process Down',
        variant: 'error',
      },
    ])
  }, [])

  const onCloseAlert = (alert: Alert) => {
    setAlerts(alerts.filter(a => a.message !== alert.message && a.variant !== alert.variant))
  }

  return (
    <YStack space={'$2'}>
      <XStack justifyContent="space-between">
        <Text size={15} weight={'semibold'}>
          Alerts
        </Text>
        <div style={{ marginRight: '8px' }}>
          <ChevronRightIcon size={20} />
        </div>
      </XStack>
      {alerts.map(alert => (
        <InformationBox
          key={alert.message}
          message={alert.message}
          icon={<CloseCircleIcon size={20} />}
          variant={alert.variant}
          onClosePress={() => onCloseAlert(alert)}
        />
      ))}
    </YStack>
  )
}

export default AlertsList
