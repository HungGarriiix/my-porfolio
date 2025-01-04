<template>
  <section
    class="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
    style="background-image: url('https://via.placeholder.com/1200x600')"
  >
    <!-- Overlay for better text contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
      <p class="text-lg md:text-2xl mb-6">I build modern & interactive web experiences.</p>
      <a
        href="#about"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
      >
        Learn More
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
