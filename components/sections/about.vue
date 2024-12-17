<template>
  <section id="about" class="section-container pt-28">
    <ul class="md:w-1/2" data-aos="fade-right">
      <li class="mb-10">
        <h1
          class="text-heading-light dark:text-heading-dark text-5xl mb-5 font-bold"
        >
          {{ $t("about.about-heading") }}
        </h1>
        <p
          class="font-poppins text-lg text-content-light dark:text-content-dark"
        >
          {{ $t("about.about-paragraph.p_1") }}
          <span v-if="useRoute().fullPath.includes('/tm')"
            >we bu tehnoloýalary bilýärin</span
          >
          <u
            class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text cursor-default opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
            >Vue.js, Nuxt.js, JavaScript, HTML, CSS, SCSS, Tailwind CSS, and
            Git.</u
          >
          {{ $t("about.about-paragraph.p_2") }}
        </p>
      </li>
      <li class="border-b pb-5 mb-10">
        <h1
          class="text-heading-light dark:text-heading-dark text-5xl mb-5 font-bold"
        >
          {{ $t("about.work-experience.heading") }}
        </h1>
        <p class="flex justify-between flex-wrap mb-3">
          <span class="text-xl text-content-light dark:text-content-dark">
            {{ $t("about.work-experience.profession") }}
          </span>
          <small
            class="text-button-text bg-button-bg py-1 px-2 rounded-xl font-bold"
          >
            {{ $t("about.work-experience.time") }}
          </small>
        </p>
        <small class="flex justify-between flex-wrap gap-2 text-content-dark"
          ><p>
            <i class="pi pi-building"></i>
            {{ $t("about.work-experience.building") }}
          </p>
          <p>
            <i class="pi pi-map-marker"></i>
            {{ $t("about.work-experience.city") }}
          </p>
          <p>
            <i class="pi pi-calendar"></i>
            {{ $t("about.work-experience.month") }} 2021
          </p>
        </small>
      </li>
      <li class="border-b pb-5">
        <h1
          class="text-heading-light dark:text-heading-dark text-5xl mb-5 font-bold"
        >
          {{ $t("about.education.heading") }}
        </h1>
        <p class="flex justify-between flex-wrap gap-3 xs:gap-0 mb-3">
          <span class="text-xl text-content-light dark:text-content-dark">
            {{ $t("about.education.profession") }}
          </span>
          <small
            class="text-button-text bg-button-bg py-1 px-2 rounded-xl font-bold"
            >{{ $t("about.work-experience.time") }}</small
          >
        </p>
        <small class="flex justify-between flex-wrap gap-2 text-content-dark"
          ><p>
            <i class="pi pi-building"></i>
            {{ $t("about.work-experience.building") }}
          </p>
          <p>
            <i class="pi pi-calendar"></i>
            {{ $t("about.work-experience.month") }} 2019
          </p>
        </small>
      </li>
    </ul>
  </section>
</template>
