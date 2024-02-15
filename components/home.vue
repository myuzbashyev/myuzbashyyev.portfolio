<template>
  <section
    id="home"
    class="pt-28 h-screen flex flex-col text-center items-center justify-around md:justify-between md:flex-row md:text-left"
  >
    <h1
      class="text-4xl lg:text-5xl xl:text-6xl text-black dark:text-home-dark font-bold"
      data-aos="fade-right"
    >
      {{ $t("home.home-heading.h_1") }}
      <u
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
        >{{ $t("header.header-logo") }}</u
      >
      {{ $t("home.home-heading.h_2") }}
    </h1>

    <img
      src="@/assets/img/home-illust.png"
      alt="Developer illustration"
      class="w-full min-w-[300px] max-w-[500px] drop-shadow-3xl"
      data-aos="fade-left"
    />
  </section>
</template>
