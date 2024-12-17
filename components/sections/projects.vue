<template>
  <section id="projects" class="section-container flex items-end pt-28">
    <div>
      <h1
        class="text-5xl text-heading-light dark:text-heading-dark mb-5 font-bold"
      >
        {{ $t("projects.heading") }}
      </h1>
      <p class="text-content-light dark:text-content-dark text-lg mb-16">
        {{ $t("projects.paragraph") }}
      </p>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <li
          v-for="project in projects"
          class="bg-white dark:bg-projects-dark shadow-xl rounded-xl p-5"
          data-aos="flip-right"
        >
          <h1 class="text-black dark:text-white text-center text-2xl mb-5">
            {{ project.name }}
          </h1>
          <p
            class="mb-3 text-ellipsis line-clamp-6 break-words text-lg text-content-light dark:text-heading-dark leading-6"
          >
            {{ project.description }}
          </p>
          <small class="text-heading-light dark:text-heading-dark"
            >{{ $t("header.header-nav.nav_3") }}:
            <p
              class="inline-block"
              v-for="(stack, index) in project.techStack"
              :key="index"
            >
              {{ index < project.techStack.length - 1 ? `${stack},` : stack }}
            </p></small
          >
          <a
            :href="project.link"
            target="_blank"
            class="block mt-5 underline text-black dark:text-white"
            ><i class="pi pi-link"></i> {{ $t("projects.link") }}</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { $i18n } = useNuxtApp();
const projects = ref([
  {
    name: "Poem.tm",
    description: $i18n.t("projects.cards.card_1"),
    techStack: ["Vue.js", "Vuex", "TailwindCSS"],
    link: "https://poemtm-megamaster.netlify.app",
  },
  {
    name: "PURSAT.TV",
    description: $i18n.t("projects.cards.card_2"),
    techStack: ["Vuex", "Vue.js", "CSS"],
    link: "https://tv-project-megamaster.netlify.app",
  },
  {
    name: "Forkify",
    description: $i18n.t("projects.cards.card_3"),
    techStack: ["HTML", "CSS", "JavaScript"],

    link: "https://forkify-megamaster.netlify.app",
  },
  {
    name: "Porten",
    description: $i18n.t("projects.cards.card_4"),
    techStack: ["HTML", "CSS", "JavaScript"],

    link: "https://porten-megamaster.netlify.app",
  },

  {
    name: "SAG-BOL",
    description: $i18n.t("projects.cards.card_5"),
    techStack: ["Nuxt.js", "Pinia", "TailwindCSS", "PrimeVue", "REST API"],
    link: "https://sag-bol.vercel.app",
  },
  {
    name: "Natours",
    description: $i18n.t("projects.cards.card_6"),
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://natoursss.vercel.app",
  },
  {
    name: "Chapar",
    description: $i18n.t("projects.cards.card_7"),
    techStack: ["Nuxt.js", "Pinia", "TailwindCSS", "PrimeVue"],
    link: "https://chaparmotoroil.com.tm",
  },
]);
</script>
