import type { Meta, StoryObj } from '@storybook/vue3-vite'
import RLogo from './RLogo.vue'
import { LogoVariant, LogoLayout } from './types'
import { colors } from '@/app/plugins/vuetify'

const meta = {
  title: 'Components/RLogo',
  component: RLogo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(LogoVariant),
      description: 'Настроение/эмоция знака',
    },
    layout: {
      control: 'select',
      options: Object.values(LogoLayout),
      description: 'Расположение текста относительно знака',
    },
    color: {
      control: 'color',
      description: 'Цвет заливки знака',
    },
    size: {
      control: 'number',
      description: 'Размер логотипа в пикселях (ширина)',
    },
    showBrand: {
      control: 'boolean',
      description: 'Показывать ли текст "Releaf"',
    },
    label: {
      control: 'text',
      description: 'Aria-label для доступности',
    },
  },
  args: {
    variant: LogoVariant.Default,
    layout: LogoLayout.Horizontal,
    color: colors.grass,
    showBrand: false,
    size: undefined,
  },
} satisfies Meta<typeof RLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBrand: Story = {
  args: {
    showBrand: true,
  },
}

export const StackedLayout: Story = {
  args: {
    showBrand: true,
    layout: LogoLayout.Bottom,
  },
}

export const AllColors: Story = {
  render: (args) => ({
    components: { RLogo },
    setup() {
      const colorsList = [colors.grass, colors.pine, colors.lime, colors.white]

      return { args, colorsList }
    },
    template: `
      <div style="display: flex; flex-direction: row; gap: 16px; padding: 20px;  background: #D6D6CC; border-radius: 8px;">

          <div v-for="color in colorsList" :key="color" style="display: flex; justify-content: center; align-items: center; padding: 10px;">
            <RLogo
              v-bind="args"
              :color="color"
              :size="52"
            />
        </div>
      </div>
    `,
  }),
  args: {
    showBrand: false,
  },
}
