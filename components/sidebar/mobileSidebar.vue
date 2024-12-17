<template>
  <Drawer v-model:visible="visible" :block-scroll="true">
    <template #header>
      <a href="#home">
        <img src="/assets/img/main-icon-48.png" alt="Gradient gear icon" />
      </a>
    </template>
    <template>
      <div></div>
    </template>
    <ul class="flex flex-col items-center gap-y-3 text-xl">
      <li v-for="(navRoute, index) in navigationRoutes" :key="index">
        <a
          class="transition-colors ease-in-out"
          :class="[
            isDark ? 'text-content-dark' : 'text-content-light',
            currentHash === navRoute.href && isDark
              ? 'text-white'
              : currentHash === navRoute.href && !isDark
              ? '!text-black'
              : '',
          ]"
          :href="navRoute.href"
          >{{ navRoute.section }}</a
        >
      </li>
    </ul>
    <template #footer>
      <ul class="flex gap-x-6 items-center justify-center">
        <li
          v-for="(lang, index) in languages"
          :key="index"
          @click="$emit('switchLang', lang.code)"
        >
          <i :class="lang.icon" class="rounded-sm"></i>
        </li>
        <li
          class="border transition-colors ease-in-out rounded py-1 px-2"
          :class="isDark ? 'border-content-light' : ' border-content-dark'"
          @click="$emit('switchTheme')"
        >
          <i
            class="transition-colors ease-in-out"
            :class="
              isDark
                ? 'pi pi-sun text-lg text-content-dark'
                : 'pi pi-moon text-lg text-content-light'
            "
          ></i>
        </li>
      </ul>
    </template>

    <template #closeicon>
      <i
        class="pi pi-times !text-xl"
        :class="isDark ? 'text-content-dark' : 'text-content-light'"
      ></i>
    </template>
  </Drawer>
</template>

<script setup>
const props = defineProps([
  "navigationRoutes",
  "socialMedia",
  "languages",
  "visible",
  "isDark",
]);
const emit = defineEmits(["update", "switchTheme", "switchLang"]);
const visible = computed({
  get: () => props.visible,
  set: (value) => emit("update", value),
});
const currentHash = computed(() => {
  return useRouter().currentRoute.value.hash;
});
</script>
