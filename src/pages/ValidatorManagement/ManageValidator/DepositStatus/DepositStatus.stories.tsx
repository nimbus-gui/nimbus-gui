import type { Meta, StoryObj } from '@storybook/react'

import DepositStatus from './DepositStatus'

const meta = {
  title: 'Manage Validator/DepositStatus',
  component: DepositStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DepositStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { load: [32, 12, 45, 10] },
}
export const BadStats: Story = {
  args: { load: [12, 32, 14, 35, 65, 90] },
}
