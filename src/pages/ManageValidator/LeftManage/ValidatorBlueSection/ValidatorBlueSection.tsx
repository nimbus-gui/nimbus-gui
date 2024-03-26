import { YStack } from 'tamagui'

import ValidatorInfo from './ValidatorInfo'
import DepositStatus from '../DepositStatus/DepositStatus'
import ValidatorBalance from './ValidatorBalance'

const ValidatorBlueSection = () => {
  return (
    <YStack backgroundColor="#F4F6FE">
      <ValidatorInfo />
      <DepositStatus />
      <ValidatorBalance />
    </YStack>
  )
}

export default ValidatorBlueSection
