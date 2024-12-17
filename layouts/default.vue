<template>
  <header
    class="flex justify-end xl:block bg-white dark:bg-bg-dark z-10 section-container p-3 xl:py-3 sticky top-0"
  >
    <span class="hidden xl:flex items-center justify-between">
      <a href="#home">
        <img src="/assets/img/main-icon-64.png" alt="Gradient gear icon" />
      </a>
      <nav
        class="text-content-light dark:text-content-dark flex gap-5"
        :class="useRoute().fullPath.includes('/en') ? '!gap-10' : ''"
      >
        <a
          v-for="nav in headerNav"
          :href="nav.href"
          class="text-2xl transition-colors ease-in-out hover:text-black dark:hover:text-white"
          >{{ nav.section }}</a
        >
      </nav>

      <ul class="flex gap-x-4 items-center cursor-pointer">
        <li v-for="lang in languages" @click="switchLang(lang.code)">
          <i :class="lang.icon" class="rounded-sm text-xl pb-4"></i>
        </li>
        <div
          class="group border transition-colors ease-in-out rounded py-1 px-2"
          :class="
            isDark
              ? 'border-content-light hover:border-white'
              : ' border-content-dark hover:border-black'
          "
          @click="themeColorSwitcher"
        >
          <i
            class="transition-colors ease-in-out"
            :class="
              isDark
                ? 'pi pi-sun text-lg text-content-dark group-hover:text-white'
                : 'pi pi-moon text-lg text-content-light group-hover:text-black'
            "
          ></i>
        </div>
      </ul>
    </span>

    <i @click="visible = true" class="pi pi-align-right text-4xl xl:!hidden" />
  </header>
  <SidebarMobileSidebar
    :navigation-routes="headerNav"
    :languages="languages"
    :visible="visible"
    :isDark="isDark"
    @update="changeVisibility"
    @switchTheme="themeColorSwitcher"
    @switchLang="switchLang($event)"
  />
  <slot />
  <footer class="px-5 xl:max-w-7xl mx-auto">
    <div
      class="flex flex-col items-center gap-5 sm:items-baseline sm:flex-row sm:gap-10 sm:flex-wrap md:flex-nowrap justify-between border-b pb-10 md:gap-20 font-dm-sans"
    >
      <a
        href="#home"
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text text-2xl font-bold w-full text-center md:flex-1 md:text-left"
        >{{ $t("header.header-logo") }}</a
      >
      <p
        class="flex text-heading-light dark:text-heading-dark text-lg md:flex-none"
      >
        megamaster8856@gmail.com
      </p>
      <ul class="flex text-heading-light dark:text-heading-dark md:flex-none">
        <li v-for="icon in socialMediaIcons">
          <a :href="icon.href" target="_blank"></a>
          <i
            :class="icon.socialMedia"
            class="text-2xl ml-4 transition-colors ease-in-out hover:text-indigo-600 dark:hover:text-white"
          ></i>
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-center lg:flex-row lg:items-baseline py-10">
      <nav
        class="hidden md:flex gap-5 flex-1 font-dm-sans text-lg text-heading-light dark:text-heading-dark"
      >
        <a
          v-for="nav in headerNav"
          :href="nav.href"
          class="hover:text-indigo-600 dark:hover:text-white transition-colors ease-in-out"
          >{{ nav.section }}</a
        >
      </nav>
      <p
        class="flex-1 text-center lg:text-left text-content-light dark:text-content-dark"
      >
        {{ $t("footer.p.p_1") }}
        <u
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text cursor-default opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
          >Nuxt.js</u
        >
        {{ $t("footer.p.p_2") }}
        <u
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text cursor-default opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
          >Tailwind Css</u
        ><span v-if="useRoute().fullPath.includes('/tm')"> bilen guruldy</span
        >,{{ $t("footer.p.p_3") }}
        <u
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text cursor-default opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
          >Vercel</u
        >.{{ $t("footer.p.p_4") }}
        <u
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text cursor-default opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
          >Dm Sans</u
        >
        {{ $t("footer.p.p_2") }}
        <u
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text cursor-default opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
          >Poppins</u
        >
        {{ $t("footer.p.p_5") }}.
      </p>
    </div>
  </footer>
</template>

<script setup>
// Languages
const { $i18n } = useNuxtApp();
const { locale, setLocale } = useI18n();
const isSwitcherOpened = ref(false);
const lang = ref("");
const icon = ref("");
const languages = ref([
  {
    lang: "English",
    code: "en",
    icon: "fi fi-us",
  },
  {
    lang: "Русский",
    code: "ru",
    icon: "fi fi-ru",
  },
  {
    lang: "Türkmen",
    code: "tm",
    icon: "fi fi-tm",
  },
]);
function switchLang(code) {
  setLocale(code);
}

// Header nav
const headerNav = ref([
  {
    section: $i18n.t("header.header-nav.nav_1"),
    href: "#home",
  },
  {
    section: $i18n.t("header.header-nav.nav_2"),
    href: "#about",
  },
  {
    section: $i18n.t("header.header-nav.nav_3"),
    href: "#techStack",
  },
  {
    section: $i18n.t("header.header-nav.nav_4"),
    href: "#projects",
  },
  {
    section: $i18n.t("header.header-nav.nav_5"),
    href: "#contact",
  },
]);
// Header social media icons
const socialMediaIcons = ref([
  {
    socialMedia: "pi pi-github",
    href: "https://github.com/myuzbashyev",
  },
  {
    socialMedia: "pi pi-telegram",
    href: "https://t.me/m_yuzbashyev",
  },
  {
    socialMedia: "pi pi-instagram",
    href: "https://www.instagram.com/m_yuzbashyev/",
  },
]);

// Theme color switcher
const isDark = useIsDark();
function themeColorSwitcher() {
  isDark.value = !isDark.value;
  isDark.value ? (localStorage.theme = "dark") : (localStorage.theme = "light");
  document.body.classList.toggle("body-dark");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme:dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Sidebar switcher
const visible = ref(false);
function changeVisibility(value) {
  visible.value = value;
}
</script>
