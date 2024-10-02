<script lang="ts" setup>
import TopUi from "./TopUi.vue";
import { ref, watch,onUpdated } from "vue";

const props = defineProps<{ searchValue: string }>();
const emits = defineEmits<{ (e: "on-search", input: string): void }>();
const input = ref(props.searchValue);
const searchHandler = (e: KeyboardEvent) => {
  const target = e.target as HTMLInputElement;
  input.value = target.value;
  if (e.key === "Enter"&&input.value !== "") {
    emits("on-search", input.value.toLowerCase());
   
  }
};
watch(
  () => props.searchValue,
  (newValue) => {
    input.value = newValue;
  }
);
onUpdated(() => {
  console.log("Updated");
  console.log(input.value);
});
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
        v-model="input"
        @keydown="searchHandler"
        id="search-photo"
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
