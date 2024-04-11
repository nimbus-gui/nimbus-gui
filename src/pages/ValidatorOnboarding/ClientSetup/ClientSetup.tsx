import { useEffect, useState } from 'react'
import { Separator, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useDispatch } from 'react-redux'

import WithdrawalAddress from './WithdrawalAddress'
import LinkWithArrow from '../../../components/General/LinkWithArrow'
import ValidatorsMenuWithPrice from '../../../components/General/ValidatorsMenuWithPrice'
import { CLIENT_SETUP_SUBTITLE, LANDING } from '../../../constants'
import { setIsValidatorSet } from '../../../redux/ValidatorOnboarding/ValidatorSetup/slice'

const ClientSetup = () => {
  const dispatch = useDispatch()
  const [validatorCount, setValidatorCount] = useState(0)

  useEffect(() => {
    dispatch(setIsValidatorSet(validatorCount > 0))
  }, [validatorCount])

  const changeValidatorCountHandler = (value: string) => {
    const numberValue = Number(value)
    if (!isNaN(numberValue)) {
      setValidatorCount(numberValue)
    }
  }

  return (
    <YStack space={'$6'} padding={'26px'} width={'100%'} minHeight={'65vh'}>
      <YStack space={'$4'}>
        <Text size={19} weight={'semibold'}>
          Setup up Validators
        </Text>
        <ValidatorsMenuWithPrice
          validatorCount={validatorCount}
          changeValidatorCountHandler={changeValidatorCountHandler}
          label={CLIENT_SETUP_SUBTITLE}
        />
      </YStack>
      <Separator borderColor={'#F0F2F5'} />
      <WithdrawalAddress title={'Withdrawal address'} />
      <LinkWithArrow
        text="Advanced Recovery Method"
        to={LANDING}
        arrowRight={true}
        style={{ marginBottom: '50px', fontWeight: 'bold', fontSize: '15px' }}
      />
    </YStack>
  )
}

export default ClientSetup
