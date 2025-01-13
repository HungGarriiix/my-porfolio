<template>
  <section
    class="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
    :style="heroStyle"
  >
    <!-- Overlay for better text contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">Hello, I'm Nguyen Tien Hung</h1>
      <p class="text-lg md:text-2xl mb-6">Enthusiast .NET Software Developer & Game Developer.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import hero from '@/assets/hero.jpg'

const heroStyle = {
  backgroundImage: `url('${hero}')`,
}
</script>

<style scoped></style>
