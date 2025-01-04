<template>
  <section id="contact" class="py-16 px-4 bg-gray-50">
    <!-- <div class="max-w-6xl mx-auto"> -->
    <div class="">
      <h2 class="text-2xl font-bold text-center mb-8">Contact Me</h2>
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contact Form -->
        <form class="flex-1 bg-white p-6 rounded shadow" @submit.prevent="onSubmit">
          <div class="mb-4">
            <label for="name" class="block mb-1 font-semibold">Name</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              class="border w-full p-2"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-1 font-semibold">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="border w-full p-2"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block mb-1 font-semibold">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              class="border w-full p-2"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send
          </button>
        </form>

        <!-- Social Links -->
        <div class="flex-1 flex flex-col items-center justify-center">
          <h3 class="text-lg font-semibold mb-4">Connect with me</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-blue-500 hover:underline">LinkedIn</a>
            </li>
            <li>
              <a href="#" class="text-blue-400 hover:underline">Twitter</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:underline">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

function onSubmit() {
  // handle form submission logic here
  alert(`Thank you, ${formData.value.name}! Your message has been sent.`)
  formData.value = { name: '', email: '', message: '' }
}
</script>

<style scoped></style>
