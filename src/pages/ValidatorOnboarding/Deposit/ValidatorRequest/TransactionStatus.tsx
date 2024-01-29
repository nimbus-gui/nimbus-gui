import { Text } from '@status-im/components'
import {
  FullscreenMacOsIcon,
  MinimizeMacOsIcon,
  CloseMacOsIcon,
} from '@status-im/icons'
import { XStack } from 'tamagui'

type VTransactionStatusProps = {
  transactionStatus: string
  isTransactionConfirmation?: boolean
}

const TransactionStatus = ({
  transactionStatus,
  isTransactionConfirmation,
}: VTransactionStatusProps) => {
  const isTransactionCompleted = transactionStatus === 'Complete'

  return (
    <>
      {isTransactionConfirmation ? (
        <XStack space={'$2'} alignItems={'center'}>
          {isTransactionCompleted && <FullscreenMacOsIcon size={20} />}
          {transactionStatus === 'Pending' && <MinimizeMacOsIcon size={20} />}
          {transactionStatus === 'Fail' && <CloseMacOsIcon size={20} />}
          <Text
            size={13}
            color={isTransactionCompleted ? '#2A4AF5' : '#828282'}
            weight={'semibold'}
          >
            Transaction {transactionStatus}
          </Text>
        </XStack>
      ) : (
        <Text size={13} color="#2F80ED" weight={'semibold'}>
          Requires Deposit
        </Text>
      )}
    </>
  )
}

export default TransactionStatus
