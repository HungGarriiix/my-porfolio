<template>
  <div class="p-4 bg-white rounded shadow text-center">
    <div class="mb-4">
      <img :src="icon" alt="Skill Icon" class="mx-auto h-12 w-12" />
    </div>
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>

<style scoped></style>
