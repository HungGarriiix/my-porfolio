<template>
  <section id="projects" class="py-16 px-4 bg-gray-50">
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
    title: 'Student Wallet and Loans Discord Bot',
    image: 'https://via.placeholder.com/300x200',
    description:
      "A bot made from Discord to manage a student user's wallets and their spendings, along with checking and notifying to the loaners if they have a loan from the user.",
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: "CMS 2021's car spawn location modification tool",
    image: 'https://via.placeholder.com/300x200',
    description:
      "Car Mechanic Simulator 2021 tools forked from utilz' CMS 2018 car spawning tool and retuned by me to fit the new version with additionalshop level requirements and spawn randomizer.",
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Rocket game',
    image: 'https://via.placeholder.com/300x200',
    description: 'Made during Unity 3D Udemy course. A game',
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Idle clicker Factory game on Windows Form',
    image: 'https://via.placeholder.com/300x200',
    description:
      'A game where you will spam the click buttons to create stuffs to sell to the industries. Requires constant clickings and some logistical solution to advance the factory productions.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Pathfinding algorithm agent compilations',
    image: 'https://via.placeholder.com/300x200',
    description:
      'This is my own compilations of pathfinding algorithms for AI written in C#. First intended to serve as my study for COS30019 - Introduction to AI course, I kept and constantly updated this to learn more algorithms.',
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'My LeetCode personal storage',
    image: 'https://via.placeholder.com/300x200',
    description:
      'My own journal for my adventure into LeetCode road map. Used to store my works and my own explanations to note and find my mistakes, and (of course) to further improve the code with many methods.',
    demoLink: '#',
    repoLink: '#',
  },
]
</script>

<style scoped></style>
