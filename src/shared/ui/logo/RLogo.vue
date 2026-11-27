<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { LogoLayout, type LogoLayoutType, LogoVariant, type LogoVariantType } from './types'
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
  layout: {
    type: String as PropType<LogoLayoutType>,
    default: LogoLayout.Horizontal,
  },
  label: {
    type: String,
    default: 'releaf',
  },
  brand: {
    type: Boolean,
    default: false,
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

const brandStyle = computed(() => ({
  color: props.color === colors.white ? colors.white : colors.pine,
}))
</script>

<template>
  <div
    class="r-logo"
    role="img"
    :data-variant="props.variant"
    :data-layout="props.layout"
  >
    <span
      v-show="props.layout !== LogoLayout.Wordmark"
      class="r-logo__icon"
      v-html="svgMarkup"
    />

    <span
      v-show="props.brand"
      class="r-logo__brand"
      :style="brandStyle"
    >
      {{ props.label }}
    </span>
  </div>
</template>

<style scoped>
.r-logo {
  display: flex;
  gap: 8px;
  width: fit-content;
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
  font-weight: 700;
  font-size: 74px;
  letter-spacing: 0.02em;
}

.r-logo[data-layout='horizontal'] {
  flex-direction: row;
  align-items: center;
  gap: 40px;

  .r-logo__brand {
    padding-top: 13px;
  }

  .r-logo__icon {
    width: 153px;
    height: 153px;
  }
}

.r-logo[data-layout='vertical'] {
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .r-logo__brand {
    font-size: 63px;
  }

  .r-logo__icon {
    width: 182px;
    height: 182px;
  }
}

.r-logo[data-layout='wordmark'] {
  .r-logo__brand {
    font-size: 85px;
  }
}
</style>
