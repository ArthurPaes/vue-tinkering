import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    console.log("increment triggerd")
    count.value++
  }

  return { count, doubleCount, increment }
})
