import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { RLogo, LogoLayout, LogoVariant } from './index'
import { colors } from '@/app/plugins/vuetify'

const meta = {
  title: 'UI/RLogo',
  component: RLogo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(LogoVariant),
    },
    layout: {
      control: 'select',
      options: Object.values(LogoLayout),
    },
    color: { control: 'color' },
    label: { control: 'text' },
  },
  args: {
    variant: LogoVariant.Default,
    layout: LogoLayout.Horizontal,
    color: colors.grass,
    label: 'releaf',
  },
} satisfies Meta<typeof RLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: LogoVariant.Default,
    layout: LogoLayout.Horizontal,
    color: colors.grass,
    label: 'releaf',
    brand: true,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RLogo
  variant="default"
  layout="horizontal"
  color="#3A8F3E"
  label="releaf"
  brand
/>`,
        language: 'html',
      },
    },
  },
  render: (args) => ({
    components: { RLogo },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: center; padding: 40px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%;">
        <RLogo v-bind="args" />
      </div>
    `,
  }),
}


export const AllColors: Story = {
  name: 'All Colors',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RLogo  />
<RLogo color="#1F4D24" />
<RLogo color="#D6E86A" />
<RLogo color="#FFFFFF" />`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RLogo },
    setup() {
      return { colors }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: center; justify-content: center; padding: 20px; background: #D6D6CC;">
        <RLogo  />
        <RLogo :color="colors.pine" />
        <RLogo :color="colors.lime" />
        <RLogo :color="colors.white" />
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RLogo variant="default" />
<RLogo variant="joy" />
<RLogo variant="love" />
<RLogo variant="sad" />
<RLogo variant="sleep" />
<RLogo variant="think" />
<RLogo variant="wink" />
<RLogo variant="wow" />`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RLogo },
    setup() {
      return { LogoVariant }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: center; justify-content: center; padding: 20px; background: #D6D6CC;">
        <RLogo :variant="LogoVariant.Default" />
        <RLogo :variant="LogoVariant.Joy" />
        <RLogo :variant="LogoVariant.Love" />
        <RLogo :variant="LogoVariant.Sad" />
        <RLogo :variant="LogoVariant.Sleep" />
        <RLogo :variant="LogoVariant.Think" />
        <RLogo :variant="LogoVariant.Wink" />
        <RLogo :variant="LogoVariant.Wow" />
      </div>
    `,
  }),
}

export const HorizontalColors: Story = {
  name: 'Horizontal Colors',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RLogo layout="horizontal" brand :color="colors.grass" />
<RLogo layout="horizontal" brand :color="colors.lime" />
<RLogo layout="horizontal" brand :color="colors.white" />`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RLogo },
    setup() {
      return { colors, LogoLayout }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 40px; padding: 20px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%; overflow-y: auto;">
        <RLogo :layout="LogoLayout.Horizontal" brand :color="colors.grass" />
        <RLogo :layout="LogoLayout.Horizontal" brand :color="colors.pine" />
        <RLogo :layout="LogoLayout.Horizontal" brand :color="colors.white" />
      </div>
    `,
  }),
}

export const Vertical: Story = {
  name: 'Vertical',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RLogo :layout="LogoLayout.Vertical" brand :color="colors.grass" />
<RLogo :layout="LogoLayout.Vertical" brand :color="colors.white" />`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RLogo },
    setup() {
      return { colors, LogoLayout }
    },
    template: `
      <div style="display: flex; flex-direction: row; gap: 40px; padding: 20px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%; overflow-x: auto;">
        <RLogo :layout="LogoLayout.Vertical" brand :color="colors.grass" />
        <RLogo :layout="LogoLayout.Vertical" brand :color="colors.white" />
      </div>
    `,
  }),
}

export const BrandGrass: Story = {
  name: 'Brand Grass',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RLogo :layout="LogoLayout.Wordmark" :color="colors.grass" brand/>`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RLogo },
    setup() {
      return { colors, LogoLayout }
    },
    template: `
      <div style="display: flex; padding: 20px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%;">
        <RLogo :layout="LogoLayout.Wordmark" :color="colors.grass" brand/>
      </div>
    `,
  }),
}

export const BrandWhite: Story = {
  name: 'Brand White',
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<RLogo :layout="LogoLayout.Wordmark" :color="colors.white" brand/>`,
        language: 'html',
      },
    },
  },
  render: () => ({
    components: { RLogo },
    setup() {
      return { colors, LogoLayout }
    },
    template: `
      <div style="display: flex; padding: 20px; background: #D6D6CC; box-sizing: border-box; width: 100%; height: 100%;">
        <RLogo :layout="LogoLayout.Wordmark" :color="colors.white" brand/>
      </div>
    `,
  }),
}

