<template>
  <!-- Header -->
  <nuxt-layout>
    <main class="container mx-auto">
      <!-- Home Section -->
      <SectionsHome />
      <!-- About section -->
      <SectionsAbout />
      <!-- Tech Stack Section -->
      <SectionsStack />
      <!-- Projects Section -->
      <SectionsProjects />
      <!-- Contact Section -->
      <SectionsContact />
    </main>
    <!-- Footer -->
  </nuxt-layout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<!-- background-color: #663dff; background-image: linear-gradient(319deg, #663dff 0%,
#aa00ff 37%, #cc4499 100%); -->
