<script setup lang="ts">
import type { RTextureProps } from './types'

const props = withDefaults(defineProps<RTextureProps>(), {
  width: 1024,
  height: 1024,
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 1024 1024"
    fill="none"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none">
      <g filter="url(#filter0_n_12_59)">
        <g clip-path="url(#clip0_12_59)">
          <path d="M1024 0H0V1024H1024V0Z" fill="#D6E86A"/>
          <path d="M1024 0H0V1024H1024V0Z" fill="url(#paint0_radial_12_59)"/>
          <path d="M1024 0H0V1024H1024V0Z" fill="url(#paint1_radial_12_59)"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_n_12_59" x="0" y="0" width="1024" height="1024" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feTurbulence type="fractalNoise" baseFrequency="0.66666668653488159 0.66666668653488159" stitchTiles="stitch" numOctaves="3" result="noise" seed="0"/>
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped"/>
          <feFlood flood-color="rgba(0, 0, 0, 0.18)" result="color1Flood"/>
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1"/>
          <feMerge result="effect1_noise_12_59">
            <feMergeNode in="shape"/>
            <feMergeNode in="color1"/>
          </feMerge>
        </filter>
        <radialGradient id="paint0_radial_12_59" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(204.8 870.4) scale(665.6)">
          <stop stop-color="#63B946" offset=""/>
          <stop offset="1" stop-color="#63B946" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint1_radial_12_59" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(870.4 122.88) scale(614.4)">
          <stop stop-color="#8DB7E6" offset=""/>
          <stop offset="1" stop-color="#8DB7E6" stop-opacity="0"/>
        </radialGradient>
        <clipPath id="clip0_12_59">
          <rect width="1024" height="1024" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </svg>
</template>

<style scoped>

</style>
