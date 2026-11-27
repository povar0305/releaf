import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { RIcon } from './index'
import { colors } from '@/app/plugins/vuetify'

const meta = {
  title: 'UI/RIcon',
  component: RIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    color: { control: 'color' },
    size: { control: 'number' },
  },
  args: {
    name: 'home',
    color: colors.pine,
    size: 24,
  },
} satisfies Meta<typeof RIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  name: 'Playground',
  args: {
    name: 'home',
    color: colors.pine,
    size: 24,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RIcon name="home" :color="colors.pine"  />`,
        language: 'html',
      },
    },
  },
  render: (args) => ({
    components: { RIcon },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%;">
        <RIcon v-bind="args" />
      </div>
    `,
  }),
}

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RIcon name="home" />`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RIcon },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%;">
        <RIcon name="home" />
      </div>
    `,
  }),
}
export const CustomSize: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RIcon name="home" :size="16"/>
<RIcon name="home" :size="20"/>
<RIcon name="home" />
`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RIcon },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%;">
        <RIcon name="home" :size="16"/>
        <RIcon name="home" :size="20"/>
        <RIcon name="home" />
      </div>
    `,
  }),
}
