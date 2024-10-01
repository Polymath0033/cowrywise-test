<script setup lang="ts">
import { ref } from "vue";
import { useGrid } from "@/composables/use-grid";
import type { ImageData } from "@/types/images";
import CardImage from "./CardImage.vue";
const gridContainer = ref(null);
const { getHeightForItem } = useGrid(".inner-div", gridContainer);
defineProps<{ images: ImageData; search: string }>();
</script>

<template>
  <div v-if="images.length<1"  class="container">
    <p>Couldn't find image(s) with name <b>{{ search }}</b></p>
  </div>
  <section ref="gridContainer" v-else class="gallery-view">
    <CardImage
      v-for="(image, i) in images"
      :key="image.id"
      :alt_description="image.alt_description"
      :author="image.user.name"
      :location="image.user?.location"
      :imageUrl="image.urls.full"
      :height="getHeightForItem(i)"
      class="inner-div"
    />
  </section>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  gap: 1rem;
  padding: 1rem;
  p{
    font-size: 1.5rem;
    font-weight: 700;
    color: red;
  }
}
.gallery-view {
  @include gallery-view;
}
.inner-div {
  @include inner-div;
  padding: 0 !important;
  position: relative;
  cursor: pointer;
}
</style>
