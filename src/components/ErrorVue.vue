<script setup lang="ts">
import TopUi from "./TopUi.vue";
defineProps(["error", "value"]);
</script>
<template>
  <TopUi>
    <h3 class="upper-text">
      Error: <span>{{ value }}</span>
    </h3>
  </TopUi>
  <section class="section">
    <h1>{{ error }}</h1>
  </section>
</template>
<style lang="scss" scoped>
.upper-text {
  @include upper-text;
  span {
    color: red;
  }
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  h1{
    color: red;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 8rem;
  }
}
</style>
