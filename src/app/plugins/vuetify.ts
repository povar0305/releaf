import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Цвета из палитры проекта
const colors = {
  pine: '#1F4D24',
  grass: '#3A8F3E',
  leaf: '#2F7D35',
  lime: '#D6E86A',
  milk: '#FBF6EF',
  paper: '#FFFDF9',
  sand: '#F1ECE0',
  sky: '#8DB7E6',
  petal: '#F3A6BC',
  graphite: '#1C1C1E',
  moss: '#3A4236',
  white: '#FFFFFF',
}

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.leaf,
          secondary: colors.grass,
          accent: colors.lime,
          error: '#B3261E',
          info: colors.sky,
          success: colors.leaf,
          warning: '#FFC107',

          // Кастомные цвета палитры Releaf
          pine: colors.pine,
          grass: colors.grass,
          leaf: colors.leaf,
          lime: colors.lime,
          milk: colors.milk,
          paper: colors.paper,
          sand: colors.sand,
          sky: colors.sky,
          petal: colors.petal,
          graphite: colors.graphite,
          moss: colors.moss,
          white: colors.white,

          // Семантические цвета для светлой темы
          background: colors.paper,
          surface: colors.white,
          'surface-variant': colors.sand,
          'on-background': colors.graphite,
          'on-surface': colors.graphite,
          'on-primary': colors.white,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.grass,
          secondary: colors.leaf,
          accent: colors.lime,
          error: '#CF6679',
          info: colors.sky,
          success: colors.grass,
          warning: '#FFB300',

          // Кастомные цвета палитры Releaf
          pine: colors.pine,
          grass: colors.grass,
          leaf: colors.leaf,
          lime: colors.lime,
          milk: colors.milk,
          paper: colors.paper,
          sand: colors.sand,
          sky: colors.sky,
          petal: colors.petal,
          graphite: colors.graphite,
          moss: colors.moss,
          white: colors.white,

          // Семантические цвета для тёмной темы
          background: colors.moss,
          surface: '#2A3027',
          'surface-variant': colors.pine,
          'on-background': colors.paper,
          'on-surface': colors.paper,
          'on-primary': colors.white,
        },
      },
    },
  },
})
