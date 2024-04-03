import { useEffect, useMemo, useState } from 'react'
import { YStack } from 'tamagui'

import { VALIDATORS_DATA, VALIDATOR_TABS_MANAGEMENT } from '../../../constants'
import ManagementTableHeader from './ManagementTableHeader'
import ManagementTableBody from './ManagementTableBody'
import './ManagementTable.module.css'

type ManagementTableProps = {
  tab: string
  searchValue: string
}

export type Validator = {
  name: string
  address: string
  balance: number
  income: number
  proposals: string
  attestations: string
  effectiveness: number
  status: string
}

const isValidStatus = (validatorStatus: string, tabStatus: string) => {
  if (
    validatorStatus === tabStatus ||
    tabStatus ===
      VALIDATOR_TABS_MANAGEMENT[VALIDATOR_TABS_MANAGEMENT.length - 1]
  ) {
    return true
  }
  return false
}

const isValidNameOrAddress = (
  validatorName: string,
  validatorAddress: string,
  searchValue: string,
) => {
  if (
    validatorName.includes(searchValue) ||
    validatorAddress.includes(searchValue)
  ) {
    return true
  }
  return false
}

const ManagementTable = ({ tab, searchValue }: ManagementTableProps) => {
  const [validators, setValidators] = useState<Validator[]>([])

  useEffect(() => {
    setValidators(VALIDATORS_DATA)
  }, [])

  const filteredValidators = useMemo(() => {
    return validators
      .filter(validator => isValidStatus(validator.status, tab))
      .filter(validator =>
        isValidNameOrAddress(validator.name, validator.address, searchValue),
      )
  }, [validators, tab, searchValue])

  return (
    <YStack>
      <table className="validator-management-table">
        <ManagementTableHeader />
        <ManagementTableBody filteredValidators={filteredValidators} />
      </table>
    </YStack>
  )
}

export default ManagementTable
