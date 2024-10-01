<script lang="ts" setup>
import TopUi from "./TopUi.vue";
import { ref } from "vue";
const search = ref("African");
const emits = defineEmits<{ (e: "on-search", input: string): void }>();

const searchHandler = (e: KeyboardEvent) => {
  console.log(e)
  if (e.key === "Enter"&&search.value !== "") {
    emits("on-search", search.value.toLowerCase());
  }
};
const changeHandler = (e: Event) => {
  const target = e.target as HTMLInputElement;
  search.value = target.value;
};
</script>
<template>
  <TopUi>
    <label class="search-label" for="search-photo">
      <i class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
          />
        </svg>
      </i>

      <input
        type="search"
        placeholder="Search for photos"
        v-on:keydown="searchHandler"
        v-model="search"
        v-on:change="changeHandler"
      />
    </label>
  </TopUi>
</template>
<style lang="scss" scoped>
.search-icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: var(--color-accent-darker);
}
.search-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.search-label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 8rem);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1024px;
  @include respond-to('desktop'){
    margin-left: auto;
    margin-right: auto;
  }
  @include respond-to("mobile") {
    width:100%;
  }
}
.search-label input {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 3.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--color-accent-lightest);
  color: var(--color-accent-text);
  font-size: 1rem;
  font-weight: 500;
  outline: none;
}
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
.search-label input::placeholder {
  color: var(--color-accent-text);
  font-weight: 500;
}
</style>
