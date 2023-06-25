import NavComponent from '@/component/nav'
import '@/style/main.scss'
import type { Meta } from '@storybook/html'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Nav',
  tags: ['autodocs'],
  render: () => {
    return NavComponent()
  },
} satisfies Meta<null>

export default meta
export const Primary = {}
