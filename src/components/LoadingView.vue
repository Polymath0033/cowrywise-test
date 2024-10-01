<script lang="ts" setup>
import { ref } from "vue";
import TopUi from "./TopUi.vue";
import { useGrid } from "@/composables/use-grid";
const gridContainer = ref(null);
const { getHeightForItem } = useGrid(".inner-div", gridContainer)
defineProps(['search'])
</script>
<template>
  <TopUi>
    <h3 class="upper-text">
      Searching for  <span>“ {{ search }} ”</span>
    </h3>

  </TopUi>
<section class="gallery-view" ref="gridContainer">
  <div
  :style="{height:`${getHeightForItem(i)}px`}"
      v-for="i in [0,1,2,3,4,5,6,7,8]"
      :key="i"
      class="inner-div"
    >
      <div class="title"></div>
      <div class="sub-title"></div>
    </div>
</section>

</template>
<style lang="scss" scoped>
.gallery-view {
  @include gallery-view;
}
.upper-text {
 @include upper-text;
  span {
    color: #7d8a9e;
  }
}
 
.inner-div {
  @include inner-div;
  .title {
    width: 60%;
    background-color: $color-accent-light;
    padding: 0.6rem;
  }
  .sub-title {
    width: 40%;
    background-color: $color-accent-light;
    padding: 0.6rem;
  }

  .title,
  .sub-title {
    background-image: linear-gradient(
      120deg,
      $color-accent-light 30%,
      #f0f0f0 38%,
      #f0f0f0 40%,
      $color-accent-light 48%
    );
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load 1s infinite;
  }
}
.text {
  background-image: linear-gradient(
    120deg,
    #dddddd 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #dddddd 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: load 1s infinite;
}
@keyframes loading {
  100% {
    background-position: -100% 0;
  }
}
@keyframes load {
  100% {
    background-position: -100% 0;
  }
}
</style>
