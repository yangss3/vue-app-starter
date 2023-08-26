<script setup lang="ts">
defineProps<{ msg: string }>()

const router = useRouter()
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl title">
      {{ msg }}
    </h1>
    <h2 class="text-xl text-teal-600 my-4">
      Vue3 + VueRouter + Vite + TypeScript + UnoCSS + ESLint
    </h2>
    <div class="mt-10">
      <button class="btn mr-2" @click="router.push('/foo')">
        /foo
      </button>
      <button class="btn" @click="router.push('/bar')">
        /bar
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.title {
  --at-apply:
    my-6 font-bold bg-clip-text text-transparent
    bg-gradient-to-br from-blue-400 to-red-500;
}
</style>
