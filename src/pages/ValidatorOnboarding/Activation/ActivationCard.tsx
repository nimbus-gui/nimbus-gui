import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import ActivationSyncCard from './ActivationSyncCard'

type ActivationCardProps = {
  text: string
  value?: string
  isGaugeIncluded?: boolean
  gaugeColor?: string
  gaugeSynced?: number
  gaugeTotal?: number
  isLast?: boolean
}

const ActivationCard = ({
  text,
  value,
  isGaugeIncluded,
  gaugeColor,
  gaugeSynced,
  gaugeTotal,
  isLast,
}: ActivationCardProps) => {
  return (
    <YStack
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        padding: '12px 16px',
        backgroundColor: '#FFF',
        marginBottom: !isLast && '10px',
        flex: 1,
      }}
    >
      {!isGaugeIncluded && (
        <Stack space={'$2'}>
          <Text size={15} weight={'semibold'}>
            {text}
          </Text>
          <Text size={27} color="blue" weight={'semibold'}>
            {value}
          </Text>
        </Stack>
      )}
      {isGaugeIncluded && (
        <Stack space={'$2'}>
          <Text size={15} weight={'semibold'}>
            {text}
          </Text>
          <ActivationSyncCard
            gaugeColor={gaugeColor || ''}
            gaugeSynced={gaugeSynced || 0}
            gaugeTotal={gaugeTotal || 1}
          />
        </Stack>
      )}
    </YStack>
  )
}

export default ActivationCard
