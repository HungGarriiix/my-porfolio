<template>
  <section class="py-16 px-4 bg-white">
    <!-- <div class="max-w-6xl mx-auto"> -->
    <div class="">
      <h2 class="text-2xl font-bold mb-8">Achievements</h2>
      <div v-for="(achieve, i) in achievements" :key="i" class="mb-6">
        <div class="flex items-baseline justify-between">
          <h3 class="text-lg font-semibold">{{ achieve.name }}</h3>
          <span class="text-sm text-gray-500">
            {{ achieve.date }}
          </span>
        </div>
        <p class="text-gray-700">
          {{ achieve.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const achievements = [
  {
    name: 'Won 1st Place in XYZ Hackathon',
    date: 'Mar 2023',
    description: 'Led a team to build an innovative web app for managing group tasks.',
  },
  {
    name: 'Top 10 in ABC Coding Challenge',
    date: 'Nov 2022',
    description: 'Developed a full-stack solution for real-time data analytics.',
  },
]
</script>

<style scoped></style>
