<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import HeroSection from './components/sections/home/HeroSection.vue'
import AboutMe from './components/sections/home/AboutMe.vue'
import SkillsSection from './components/sections/home/SkillsSection.vue'
import Achievements from './components/sections/home/AchievementsSection.vue'
import WorkExperience from './components/sections/home/WorkExperience.vue'
import ProjectsSection from './components/sections/home/ProjectsSection.vue'
import ContactSection from './components/sections/home/ContactSection.vue'
import EducationSection from './components/sections/home/EducationSection.vue'
import FooterSection from './components/Footer.vue'
</script>

<template>
  <div class="font-sans text-gray-800">
    <Header />
    <HeroSection />
    <AboutMe />
    <EducationSection />
    <Achievements />
    <SkillsSection />
    <WorkExperience />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style scoped></style>
