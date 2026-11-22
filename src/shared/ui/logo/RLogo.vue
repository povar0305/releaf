<script setup lang="ts">
import {computed, type PropType} from 'vue'
import {type LogoLayoutType, LogoVariant, type LogoVariantType} from './types'
import { colors } from '@/app/plugins/vuetify'


const props = defineProps({
  variant: {
    type: String as PropType<LogoVariantType>,
    default: LogoVariant.Default,
  },
  color: {
    type: String,
    default: colors.grass,
  },
  showBrand: {
    type: Boolean,
    default: false,
  },
  layout: {
    type: String as PropType<LogoLayoutType>,
    default: 'horizontal',
  },
  label: {
    type: String,
    default: 'Releaf logo',
  },
  size: {
    type: Number,
    default: 120,
  },
})

const rawSvgs = import.meta.glob<string>('./assets/Logo-*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const variants = Object.entries(rawSvgs).reduce<Record<string, string>>((acc, [path, content]) => {
  const name = path.match(/Logo-([a-z]+)\.svg$/i)?.[1]
  if (name) acc[name.toLowerCase()] = content
  return acc
}, {})

const currentVariant = computed(() => variants[props.variant] ?? variants.default ?? '')

const svgMarkup = computed(() => {
  if (!currentVariant.value) return ''
  return currentVariant.value.replace(/<path\b([^>]*?)\/>/gi, (_m, attrs: string) => {
    if (/\bfill\s*=/.test(attrs)) return `<path${attrs}/>`
    return `<path${attrs} fill="${props.color}"/>`
  })
})
</script>

<template>
  <div
    class="r-logo"
    :class="[
      `r-logo--${props.variant}`,
      { 'r-logo--horizontal': props.layout === 'horizontal' },
      { 'r-logo--stacked': props.layout === 'bottom' },
    ]"
    :style="{ width: props.size ? `${props.size}px` : undefined , height: props.size ? `${props.size}px` : undefined ,}"
    role="img"
    :aria-label="showBrand ? `Releaf logo - ${props.variant}` : props.label"
  >
    <span
      class="r-logo__icon"
      :style="{ width: props.size ? `${props.size}px` : undefined , height: props.size ? `${props.size}px` : undefined ,}"

      v-html="svgMarkup"
    />
    <span
      v-if="showBrand"
      class="r-logo__brand"
    >
      Releaf
    </span>
  </div>
</template>

<style scoped>
.r-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  line-height: 0;
}

.r-logo--stacked {
  flex-direction: column;
  align-items: flex-start;
}

.r-logo__icon {
  flex-shrink: 0;
}

.r-logo__icon :deep(svg) {
  display: block;
}

.r-logo__brand {
  font-family:
    'Onest Variable',
    Onest,
    Inter,
    system-ui,
    sans-serif;
  font-weight: 600;
  font-size: 0.875em;
  color: currentColor;
  letter-spacing: 0.02em;
}
</style>
