<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

const isShowHamburgerIcon = computed(() => {
  return userStore.isMobile
})

const isShowToolbarItems = computed(() => {
  return !userStore.isMobile
})

const drawer = ref<boolean>(false)
</script>

<template>
  <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="isShowHamburgerIcon">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <span class="title">鞋槓人森的秘密基地</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items v-if="isShowToolbarItems">
        <v-btn to="/">首頁</v-btn>
        <v-btn to="/shop">人森小鋪</v-btn>
        <v-btn to="/news">最新消息</v-btn>
        <v-btn to="/contact">聯絡我們</v-btn>
        <v-btn to="/recommendation">推薦文章</v-btn>
        <v-btn to="/notes">藥學筆記</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" >
      <v-list>
        <v-list-item to="/">首頁</v-list-item>
        <v-list-item to="/shop">人森小鋪</v-list-item>
        <v-list-item to="/news">最新消息</v-list-item>
        <v-list-item to="/contact">聯絡我們</v-list-item>
        <v-list-item to="/recommendation">推薦文章</v-list-item>
        <v-list-item to="/notes">藥學筆記</v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
