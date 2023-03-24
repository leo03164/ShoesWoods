import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const MOBILE_MAX_WIDTH = 768
  const isMobile = document.documentElement.clientWidth < MOBILE_MAX_WIDTH
  return {
    isMobile
  }
})
