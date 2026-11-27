<script setup lang="ts">
import { RouterView } from 'vue-router'
import { RLogo } from "@/shared/ui";
</script>

<template>
  <v-app>
    <v-main>
      <RLogo/>
      <RouterView />
    </v-main>
  </v-app>
</template>
