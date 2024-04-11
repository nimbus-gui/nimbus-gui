import type { Meta, StoryObj } from '@storybook/react'

import ManagementTable from './ManagementTable'
import { VALIDATORS_DATA } from '../../../constants'

const meta = {
  title: 'ValidatorManagement/ManagementTable',
  component: ManagementTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    filteredValidators: VALIDATORS_DATA,
  },
}
