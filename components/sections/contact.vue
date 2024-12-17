<template>
  <section
    id="contact"
    class="section-container h-screen flex items-center pt-28"
  >
    <h1
      class="text-4xl md:text-5xl xl:text-6xl text-center text-contact-heading dark:text-heading-dark font-bold"
      data-aos="fade"
    >
      {{ $t("contact.heading") }}:
      <a
        href="mailto:megamaster8856@gmail.com"
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
      >
        {{ $t("header.header-logo") }}</a
      >
    </h1>
  </section>
</template>
