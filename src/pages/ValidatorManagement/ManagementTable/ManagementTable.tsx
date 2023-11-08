import { Checkbox, Text } from '@status-im/components'
import { OptionsIcon, SortIcon } from '@status-im/icons'
import { useState } from 'react'
import { YStack, XStack } from 'tamagui'

import ValidatorProfile from '../../../components/General/ValidatorProfile'
import SearchManagement from './SearchManagement'
import './ManagementTable.css'

const validators = [
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
  {
    number: 1,
    address: 'zQ3asdf9d4Gs0',
    balance: 100,
    income: 100,
    proposals: 100,
    attestations: 100,
    effectiveness: 100,
    deposits: 100,
    rank: 100,
    status: 'Active',
  },
]

const ManagementTable = () => {
  const [searchValue, setSearchValue] = useState('')

  const changeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <YStack>
      <XStack justifyContent="space-between">
        <SearchManagement searchValue={searchValue} changeSearchValue={changeSearchValue} />
        <SortIcon
          size={20}
          color="#647084"
          style={{
            border: '1px solid #DCE0E5',
            borderRadius: '10px',
            padding: '6px',
            cursor: 'pointer',
          }}
        />
      </XStack>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox id="table" variant="outline" />
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                {validators.length} Validators
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Balance
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Income
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Proposals
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Attestations
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Effectiveness
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Deposits
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Rank
              </Text>
            </th>
            <th>
              <Text size={15} color={'#647084'}>
                Status
              </Text>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {validators.map((validator, index) => (
            <tr key={index}>
              <td>
                <Checkbox id={index.toString()} variant="outline" />
              </td>
              <td>
                <ValidatorProfile number={validator.number} address={validator.address} />
              </td>
              <td>
                <Text size={15} color={'#647084'} weight={'semibold'}>
                  {validator.balance}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'} weight={'semibold'}>
                  {validator.income}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.proposals}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.attestations}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.effectiveness}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.deposits}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#647084'}>
                  {validator.rank}
                </Text>
              </td>
              <td>
                <Text size={15} color={'#2F80ED'} weight={'semibold'}>
                  {validator.status}
                </Text>
              </td>
              <td>
                <OptionsIcon size={20} color="#647084" style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </YStack>
  )
}

export default ManagementTable