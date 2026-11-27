<script setup lang="ts">
import { computed } from 'vue'
import type { RIconProps } from './types'

const props = withDefaults(defineProps<RIconProps>(), {
  color: 'currentColor',
  size: 24,
})

const rawSvgs = import.meta.glob<string>('./assets/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const icons = Object.entries(rawSvgs).reduce<Record<string, string>>((acc, [path, content]) => {
  const name = path.match(/([^/]+)\.svg$/i)?.[1]?.toLowerCase()
  if (name) acc[name] = content
  return acc
}, {})

const svgMarkup = computed(() => {
  const icon = icons[props.name]
  if (!icon) return ''
  return icon.replace(
    /<(path|circle|rect|ellipse|polygon)\b([^>]*?)\/>/gi,
    (match, tag: string, attrs: string) => {
      if (/\b(fill|stroke)\s*=/.test(attrs)) return match
      return `<${tag}${attrs} fill="${props.color}"/>`
    },
  )
})
</script>

<template>
  <span
    class="r-icon"
    role="img"
    :style="{ width: `${props.size}px`, height: `${props.size}px`, color: props.color }"
    v-html="svgMarkup"
  />
</template>

<style scoped>
.r-icon {
  display: inline-flex;
  flex-shrink: 0;
}

.r-icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
