import type { Meta, StoryObj } from '@storybook/react'

import SyntaxHighlighter from './SyntaxHighlighter'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'ValidatorOnboarding/SyntaxHighlighter',
  component: SyntaxHighlighter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof SyntaxHighlighter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { rows: ['yarn', 'yarn build', 'yarn dev', 'house'] },
}
