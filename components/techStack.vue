<template>
  <section id="techStack" class="pt-28 flex items-center md:h-screen md:p-0">
    <div>
      <h1
        class="text-5xl text-heading-light dark:text-heading-dark font-bold mb-5"
      >
        {{ $t("techStack.heading") }}
      </h1>
      <p class="text-content-light dark:text-content-dark text-lg mb-20">
        {{ $t("techStack.paragraph") }}
      </p>
      <ul
        class="flex flex-wrap gap-10 xl:grid xl:grid-cols-7 xl:gap-x-32 xl:gap-y-20"
        data-aos="fade-up"
      >
        <li v-for="icon in devIcons">
          <i class="text-7xl" :class="icon"></i>
        </li>
        <li>
          <i
            class="text-7xl"
            :class="
              isDark
                ? 'devicon-github-original text-white'
                : 'devicon-github-original colored'
            "
          ></i>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const devIcons = ref([
  "devicon-html5-plain colored",
  "devicon-css3-plain colored",
  "devicon-javascript-plain colored",
  "devicon-vuetify-line colored",
  "devicon-vscode-plain colored",
  "devicon-webpack-plain colored",
  "devicon-vuejs-plain colored",
  "devicon-tailwindcss-plain colored",
  "devicon-sass-original colored",
  "devicon-nuxtjs-plain colored",
  "devicon-npm-original-wordmark colored",
  "devicon-git-plain colored",
  "devicon-figma-plain colored",
]);
const isDark = useIsDark();
</script>
