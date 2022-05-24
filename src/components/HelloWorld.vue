<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <div class="w-1/2 mx-auto mt-150px text-center">
    <h1 class="text-3xl title">
      {{ msg }}
    </h1>
    <h2 class="text-xl text-teal-600 my-4">
      Vue3 + Vite + TypeScript + UnoCSS + ESLint
    </h2>
    <div>
      <button class="btn" @click="increment">
        count : {{ count }}
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.title {
  @apply my-6 font-bold bg-clip-text text-transparent
    bg-gradient-to-br from-blue-400 to-red-500;
}

.btn {
  @apply py-1 px-4 text-white rounded
    bg-teal-800/60 hover:bg-teal-800/70 active:bg-teal-800/80;
}
</style>
