import { useState } from 'react'
import { Input, Text } from '@status-im/components'
import { AddIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'

import DepositSubtitle from '../../pages/ValidatorOnboarding/Deposit/DepositSubtitle'
import { CURRENCIES, ETH_PER_VALIDATOR } from '../../constants'
import CurrencyDropdown from './CurrencyDropdown'

type ValidatorsMenuWithPriceProps = {
  validatorCount: number
  changeValidatorCountHandler: (value: string) => void
}

const ValidatorsMenuWithPrice = ({
  validatorCount,
  changeValidatorCountHandler,
}: ValidatorsMenuWithPriceProps) => {
  const [currency, setCurrency] = useState(CURRENCIES[0])

  const totalPrice = (validatorCount * currency.price).toFixed(2)

  const changeCurrency = (currency: (typeof CURRENCIES)[0]) => {
    setCurrency(currency)
  }

  return (
    <XStack justifyContent={'space-between'} width={'80%'}>
      <Stack space={'$2'}>
        <DepositSubtitle />
        <Input
          icon={
            <AddIcon
              size={16}
              style={{ cursor: 'pointer' }}
              onClick={() => changeValidatorCountHandler((validatorCount + 1).toString())}
            />
          }
          style={{ fontWeight: 'bold' }}
          value={validatorCount.toString()}
          onChangeText={changeValidatorCountHandler}
        />
      </Stack>
      <YStack space={'$2'}>
        <Text size={15} weight={'semibold'}>
          ETH
        </Text>
        <Text size={27} weight={'semibold'}>
          {validatorCount * ETH_PER_VALIDATOR}
        </Text>
      </YStack>
      <YStack space={'$2'}>
        <XStack style={{ justifyContent: 'space-between' }}>
          <Text size={15} weight={'semibold'}>
            {currency.name}
          </Text>
          <CurrencyDropdown changeCurrency={changeCurrency} />
        </XStack>
        <Text size={27} weight={'semibold'}>
          {currency.symbol}
          {totalPrice} {currency.name}
        </Text>
      </YStack>
    </XStack>
  )
}

export default ValidatorsMenuWithPrice