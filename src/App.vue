<script setup lang="ts">
import NavbarComponent from './utility-components/NavbarComponent.vue'
</script>

<template>
  <div>
    <v-app>
      <NavbarComponent/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
</style>
