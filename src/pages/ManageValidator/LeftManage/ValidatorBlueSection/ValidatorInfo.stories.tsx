import type { Meta, StoryObj } from '@storybook/react'

import ValidatorInfo from './ValidatorInfo'

const meta = {
  title: 'Manage Validator/ValidatorInfo',
  component: ValidatorInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
