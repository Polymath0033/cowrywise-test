<script setup lang="ts">
import HeaderVue from "./components/HeaderVue.vue";
import LoadingView from "./components/LoadingView.vue";
import MainView from "./components/MainView.vue";
import ErrorVue from "./components/ErrorVue.vue";
import { fetchUnsplashImages } from "./config/api";
import { ref, onMounted, watch, onUnmounted } from "vue";

const images = ref([]);
const searchValue = ref("African");
const loading = ref(false);
const error = ref<string|null>(null);
const searchImages = async (search: string) => {
  console.log(search);
  
  searchValue.value = search;
  console.log(searchValue.value);
  try {
    loading.value = true;
    const response = await fetchUnsplashImages(search);
    console.log(response);
    images.value = response.results;
    console.log(images.value);
  } catch (err) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = String(err);
    }
    console.error(err);
    console.log(error.value);
  } finally {
    loading.value = false;
  }
};
onMounted(searchImages);
watch(searchValue, searchImages);
</script>

<template>
  <LoadingView :search="searchValue" v-if="loading" />
  <ErrorVue :error="error" v-else-if="error" />
  <template v-else>
    <HeaderVue @on-search="searchImages"  />
    <MainView :images="images" :search="searchValue" />
  </template>
</template>

<style lang="scss">
@import "./assets/scss/global.scss";

// header {
//   line-height: 1.5;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }
// }
</style>
