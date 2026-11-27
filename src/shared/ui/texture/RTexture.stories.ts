import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { RTexture } from './index'

const meta = {
  title: 'UI/RTexture',
  component: RTexture,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
  args: {
    width: 1024,
    height: 1024,
  },
} satisfies Meta<typeof RTexture>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RTexture :width="1024" :height="1024" />`,
        language: 'html',
      },
    },
  },
  render: (args) => ({
    components: { RTexture },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px;  box-sizing: border-box; width: 100%; height: 100%;">
        <RTexture v-bind="args" />
      </div>
    `,
  }),
}

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RTexture />`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RTexture },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px;  box-sizing: border-box; width: 100%; height: 100%;">
        <RTexture />
      </div>
    `,
  }),
}

export const CustomSize: Story = {
  name: 'Custom Size',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RTexture :width="512" :height="512" />`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RTexture },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px;  box-sizing: border-box; width: 100%; height: 100%;">
        <RTexture :width="512" :height="512" />
      </div>
    `,
  }),
}
