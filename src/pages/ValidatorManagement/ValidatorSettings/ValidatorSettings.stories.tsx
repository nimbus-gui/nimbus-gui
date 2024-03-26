import type { Meta, StoryObj } from '@storybook/react'
import ValidatorSettingsCards from './ValidatorSettingsCards'

const meta = {
  title: 'Manage Validator/ValidatorSettingsCards',
  component: ValidatorSettingsCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorSettingsCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
