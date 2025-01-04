<template>
  <section class="py-16 px-4 bg-gray-50">
    <!-- <div class="max-w-6xl mx-auto"> -->
    <div class="">
      <h2 class="text-2xl font-bold mb-8">Work Experience</h2>
      <div class="border-l border-gray-300 ml-4">
        <div v-for="(job, index) in experiences" :key="index" class="mb-8 ml-4 relative">
          <div class="w-3 h-3 bg-blue-500 rounded-full absolute -left-[6px] top-1.5"></div>
          <div class="text-sm text-gray-500">
            {{ job.period }}
          </div>
          <h3 class="text-lg font-semibold">{{ job.title }}</h3>
          <p class="text-gray-600 mb-2">{{ job.company }}</p>
          <p class="text-gray-700">{{ job.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    period: 'Jan 2022 - Present',
    title: 'Frontend Developer',
    company: 'TechCorp Inc.',
    description:
      'Working on modernizing the company’s web platform, implementing Vue.js for the front-end, and collaborating with design teams for UI/UX improvements.',
  },
  {
    period: 'Jun 2021 - Dec 2021',
    title: 'Software Intern',
    company: 'Startup X',
    description:
      'Assisted in building and testing new features for the company’s flagship product, focusing on performance optimization.',
  },
]
</script>

<style scoped></style>
