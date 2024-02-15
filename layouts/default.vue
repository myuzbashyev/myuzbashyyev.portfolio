<template>
  <header
    class="px-5 py-10 flex justify-end sticky top-0 bg-white dark:bg-bg-dark z-10 font-dm-sans xl:max-w-7xl xl:px-0 xl:mx-auto xl:block xl:justify-normal"
  >
    <div
      class="fixed top-0 bottom-0 left-0 right-0 h-screen bg-black/30 dark:bg-white/30 opacity-0 invisible transition-opacity duration-500 xl:static xl:bg-inherit xl:h-auto xl:opacity-100 xl:visible"
      :class="{ 'opacity-100 !visible': isSidebarOpened }"
    >
      <div
        class="bg-white dark:bg-bg-dark fixed h-screen w-72 py-32 left-0 top-0 flex flex-col gap-5 items-center xl:flex-row xl:w-auto xl:justify-between xl:h-auto xl:p-0 xl:static"
      >
        <i
          @click="isSidebarOpened = false"
          class="pi pi-times text-4xl absolute right-1 top-1 dark:text-home-dark xl:!hidden"
        ></i>
        <a
          href="#home"
          class="hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 xl:inline-block text-transparent bg-clip-text text-2xl font-bold outline-none"
        >
          {{ $t("header.header-logo") }}
        </a>
        <nav
          class="flex-col text-content-light dark:text-content-dark flex gap-5 xl:flex-row"
          :class="useRoute().fullPath.includes('/en') ? '!gap-10' : ''"
        >
          <a
            v-for="nav in headerNav"
            :href="nav.href"
            class="text-xl transition-colors ease-in-out hover:text-black dark:hover:text-white"
            @click="isSidebarOpened = false"
            >{{ nav.section }}</a
          >
        </nav>
        <ul class="flex gap-5">
          <li v-for="icon in socialMediaIcons">
            <a :href="icon.href" target="_blank">
              <i
                :class="icon.socialMedia"
                class="text-2xl text-content-light transition-colors ease-in-out hover:text-black dark:hover:text-white"
              ></i>
            </a>
          </li>
        </ul>
        <div
          class="flex items-center gap-5 text-content-light dark:text-content-dark cursor-pointer"
        >
          <div
            @click="isSwitcherOpened = !isSwitcherOpened"
            class="flex items-center justify-between w-36 px-2 py-1 border rounded relative text-content-light dark:text-content-dark"
          >
            <p>
              {{ lang }}
            </p>
            <i :class="icon" class="rounded-sm"></i>
            <i
              :class="
                isSwitcherOpened
                  ? 'pi pi-chevron-up text-xl'
                  : 'pi pi-chevron-down text-xl'
              "
              class="hover:text-black dark:hover:text-white transition-colors ease-in-out"
            ></i>
          </div>
          <div
            class="bg-white dark:bg-bg-dark absolute top-20 border w-36 rounded opacity-0 invisible transition-opacity duration-300 text-content-light dark:text-content-dark"
            :class="{ 'opacity-100 !visible': isSwitcherOpened }"
          >
            <p
              v-for="lang in languages"
              @click="switchLang(lang.code)"
              class="flex justify-between hover:bg-home-dark dark:hover:bg-content-light dark:hover:text-white px-2 py-1 cursor-pointer"
            >
              {{ lang.lang }}
              <i :class="lang.icon" class="rounded-md"></i>
            </p>
          </div>
          <div class="border rounded py-1 px-2" @click="themeColorSwitcher">
            <i
              :class="
                isDark
                  ? 'pi pi-sun text-lg transition-colors ease-in-out hover:text-white'
                  : 'pi pi-moon text-lg transition-colors ease-in-out hover:text-black'
              "
            ></i>
          </div>
        </div>
      </div>
    </div>

    <i
      @click="isSidebarOpened = true"
      class="pi pi-align-right text-4xl xl:!hidden dark:text-home-dark"
    ></i>
  </header>

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
  isSwitcherOpened.value = false;
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
const isSidebarOpened = ref(false);

onMounted(() => {
  const selectedLang = languages.value.find(
    (item) => item.code === locale.value
  );
  lang.value = selectedLang.lang;
  icon.value = selectedLang.icon;
  document.documentElement.setAttribute("lang", locale.value);
});
</script>
