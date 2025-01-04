<template>
  <section id="skills" class="py-16 px-4 bg-gray-50">
    <!-- <div class="max-w-6xl mx-auto"> -->
    <div class="">
      <h2 class="text-2xl font-bold text-center mb-8">Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <SkillCard
          v-for="(skill, index) in skills"
          :key="index"
          :title="skill.title"
          :icon="skill.icon"
          :description="skill.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillCard from '../../SkillCard.vue'

const skills = [
  {
    title: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/vue-dot-js.svg',
    description: 'Progressive JavaScript framework for building user interfaces.',
  },
  {
    title: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/tailwindcss.svg',
    description: 'Utility-first CSS framework for rapid UI development.',
  },
  {
    title: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg',
    description: 'Versatile language for web, server, and beyond.',
  },
]
</script>

<style scoped></style>
