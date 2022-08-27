<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl title">
      {{ msg }}
    </h1>
    <h2 class="text-xl text-teal-600 my-4">
      Vue3 + Vite + TypeScript + UnoCSS + ESLint
    </h2>
    <div class="mt-10">
      <button class="btn" @click="increment">
        <i class="i-carbon-add" />
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
</style>
