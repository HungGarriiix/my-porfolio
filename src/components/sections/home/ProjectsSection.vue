<template>
  <section id="projects" class="py-16 px-4 bg-white">
    <!-- <div class="max-w-6xl mx-auto"> -->
    <div class="">
      <h2 class="text-2xl font-bold text-center mb-8">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :image="project.image"
          :description="project.description"
          :demoLink="project.demoLink"
          :repoLink="project.repoLink"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../../ProjectCard.vue'

const projects = [
  {
    title: 'E-commerce Store',
    image: 'https://via.placeholder.com/300x200',
    description: 'A Vue-powered online store with checkout flow and admin panel.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Portfolio Website',
    image: 'https://via.placeholder.com/300x200',
    description: 'A personal portfolio showcasing design and coding skills.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Task Management App',
    image: 'https://via.placeholder.com/300x200',
    description: 'A Kanban-style task organizer built with Vue and Firebase.',
    demoLink: '#',
    repoLink: '#',
  },
]
</script>

<style scoped></style>
