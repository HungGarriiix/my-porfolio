<template>
  <section id="skills" class="py-16 px-4 bg-gray-50">
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
    title: 'C# and .NET Core',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg',
    description:
      'A powerful high-level programming language to develop an extendible software architecture.',
  },
  {
    title: 'ASP.NET',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@6.23.0/icons/dotnet.svg',
    description:
      'Progressive web service API framework built with .NET technology. Strong in creating API endpoints, authentication and authorization.',
  },
  {
    title: 'Unity 2D/3D',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
    description:
      'Versatile and flexible game engine for 2D/3D game development. Uses .NET technology. Develops cinematic camera works, RPG game mechanics, etc.',
  },
  {
    title: 'Lua',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@14.2.0/icons/lua.svg',
    description:
      'Easy-to-use programming language, suitable for some of my game development works.',
  },
  {
    title: 'Roblox Studio',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@14.2.0/icons/robloxstudio.svg',
    description:
      'A good game engine for development on Roblox games. Uses Lua as main programming language.',
  },
  {
    title: 'PosgreSQL',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@14.2.0/icons/postgresql.svg',
    description:
      'Powerful and scalable SQL children. Helps me a lot in sorting data and applying indexes efficiently.',
  },
  {
    title: 'Docker',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@14.2.0/icons/docker.svg',
    description:
      'Lightweight and configurable deployment container service. Uses mostly for cloud service deployments.',
  },
  {
    title: 'Azure Clouds',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg',
    description: "Microsoft's cloud services. My first place to deploy my .NET applications.",
  },
  {
    title: 'NestJS',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@14.2.0/icons/nestjs.svg',
    description:
      'Versatile for micro-service applications. Got used to circular dependencies and modular development terms thanks to this.',
  },
]
</script>

<style scoped></style>
