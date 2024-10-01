<script setup lang="ts">
import ModalVue from "./ModalVue.vue";
import { ref } from "vue";
const show = ref(false);
const showHandler = ()=>show.value = !show.value;

defineProps<{
  imageUrl: string;
  location: string | null;
  alt_description: string;
    author: string;
  height: number;
}>();
</script>
<template>
  <div class="inner-div" @click="showHandler" :style="{height:`${height}px`}">
    <img :src="imageUrl" :alt="alt_description" class="image" />
    <div class="texts">
      <h3>{{ author  }}</h3>
      <p>{{ location }}</p>
    </div>
    <ModalVue
      :imageUrl="imageUrl"
      :alt="alt_description"
      :show="show"
      @close="showHandler"
      :author="author"
      :location="location"
    />
  </div>
</template>
<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  object-fit: cover;
}
.texts {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  border-radius: 0 0 0.6rem 0.6rem;
  z-index: 3;

  h3 {
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
  }
  p {
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
  }
}
</style>
