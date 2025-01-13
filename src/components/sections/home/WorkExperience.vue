<template>
  <section class="py-16 px-4 bg-white">
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
    period: 'December 2024 - Present',
    title: 'Freelance game backend developer',
    company: 'RMIT Game Design Course Project',
    description:
      'Implements basic character movements and extra features such as sprinting with boost \n Applies 2D character vs monsters mechanics upon sword and skill attacks \n Making Third Person View cinematic camera movement when running and aiming.',
  },
  {
    period: 'April 2024 - Present',
    title: 'Core Operation Member',
    company: 'ITea Lab',
    description: "Work on lab' projects, in charge of keeping lawful order, ",
  },
  {
    period: 'Jun 2022 - Aug 2022',
    title: 'Leader',
    company: 'Swinburne Health Hackathon 2022',
    description:
      'Leads a team of 5, into making a mobile platform for mental health doctors. \n In charges of keeping the teams intact.',
  },
]
</script>

<style scoped></style>
