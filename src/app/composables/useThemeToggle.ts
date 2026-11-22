import { useTheme } from 'vuetify'
import { watchEffect, computed } from 'vue'

const STORAGE_KEY = 'releaf-theme'

/**
 * Composable для управления светлой/тёмной темой Vuetify.
 * По умолчанию — светлая тема. Выбор сохраняется в localStorage.
 */
export function useThemeToggle() {
  const theme = useTheme()

  // Текущее имя темы
  const currentName = computed(() => theme.name.value)

  // Инициализация из localStorage при первом вызове
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') {
    theme.change(saved)
  } else {
    theme.change('light')
  }

  // Синхронизация с localStorage при смене темы
  watchEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentName.value)
  })

  const isDark = () => theme.current.value.dark

  const toggleTheme = () => {
    theme.change(theme.current.value.dark ? 'light' : 'dark')
  }

  const setTheme = (name: 'light' | 'dark') => {
    theme.change(name)
  }

  return {
    theme,
    currentName,
    isDark,
    toggleTheme,
    setTheme,
  }
}
