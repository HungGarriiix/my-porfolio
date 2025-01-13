<template>
  <section class="py-16 px-4 bg-white">
    <div class="w-full">
      <h2 class="text-2xl font-bold mb-8">Achievements</h2>

      <!-- Columns Wrapper -->
      <div class="flex">
        <!-- Left Column (with right border as separator) -->
        <div class="w-1/2 pr-4 border-r border-gray-300">
          <div v-for="(achieve, i) in col1Achievements" :key="'col1-' + i" class="mb-6">
            <div class="flex items-baseline justify-between">
              <h3 class="text-lg font-semibold">{{ achieve.name }}</h3>
              <span class="text-sm text-gray-500">{{ achieve.date }}</span>
            </div>
            <p class="text-gray-700">{{ achieve.description }}</p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="w-1/2 pl-4">
          <div v-for="(achieve, i) in col2Achievements" :key="'col2-' + i" class="mb-6">
            <div class="flex items-baseline justify-between">
              <h3 class="text-lg font-semibold">{{ achieve.name }}</h3>
              <span class="text-sm text-gray-500">{{ achieve.date }}</span>
            </div>
            <p class="text-gray-700">{{ achieve.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const achievements = [
  {
    name: 'Top 30 in Swinburne Hackathon 2022',
    date: 'Aug 2023',
    description:
      'Led a team to build a platform for mental health doctors and patients to connect and diagnose online.',
  },
  {
    name: 'IBM Professional Backend Developer Certificate',
    date: 'Aug 2024',
    description: 'Developed a full-stack solution for real-time data analytics.',
  },
  {
    name: 'IELTS Certificate',
    date: 'Jun 2018',
    description: 'Overall score: 7.0/9.0.',
  },
  {
    name: 'Duolingo English Certificate',
    date: 'Sep 2022',
    description: 'Overall score: 115/160',
  },
]

// Split the array into two halves
const half = Math.ceil(achievements.length / 2)
const col1Achievements = achievements.slice(0, half)
const col2Achievements = achievements.slice(half)
</script>

<style scoped></style>
