<template>
  <div class="border rounded shadow bg-lightMint p-4">
    <img :src="image" alt="Project Image" class="mb-4 h-40 w-full object-cover rounded" />
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-700 text-sm mb-4">
      {{ description }}
    </p>
    <div class="flex items-center space-x-2">
      <a
        v-if="demoLink"
        :href="demoLink"
        target="_blank"
        class="text-blue-600 hover:underline text-sm"
      >
        Live Demo
      </a>
      <a
        v-if="repoLink"
        :href="repoLink"
        target="_blank"
        class="text-blue-600 hover:underline text-sm"
      >
        Code
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: '' },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  demoLink: { type: String, default: '' },
  repoLink: { type: String, default: '' },
})
</script>

<style scoped></style>
