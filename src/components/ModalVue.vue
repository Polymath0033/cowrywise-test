<script setup lang="ts">
const props = defineProps<{
  imageUrl: string;
  alt: string;
  show: boolean;
  location: string | null;
  author: string;
}>();
const emit = defineEmits<{ (e: "close"): void }>();
</script>
<template>
  <Teleport to="body">
    <div class="backdrop" v-on:click="$emit('close')" v-if="props.show">
      <button class="close-btn">&times;</button>
    </div>
    <Transition name="modal">
      <dialog open class="dialog" v-if="props.show">
        <img :src="props.imageUrl" :alt="props.alt" />
        <div class="modal-texts">
          <h3>{{ props.author }}</h3>
          <p>{{ props.location }}</p>
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>
<style lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 2.5rem;
    border: none;
    color: #f5f5f5;
    font-size: 2rem;
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
}
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  border: none;
  z-index: 101;
  width: calc(100% - 4rem);
  margin: 1rem;
  height: calc(100vh - 8rem);
  margin: 4rem 2rem;

  border-radius: 0.6rem;
  padding: 0;
  @include respond-to("tablet") {
    width: calc(100% - 6rem);
    margin: 3rem;
    height: calc(100vh - 6rem);
  }
  @include respond-to("desktop") {
    width: calc(100% - 40%);
    margin: 3rem 20%;
    height: calc(100vh - 6rem);
  }

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 0.6rem 0.6rem 0 0;
  }
  .modal-texts {
    width: 100%;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1.5rem;
    height: auto;
    border-radius: 0 0 0.6rem 0.6rem;
    h3 {
      color: #293e51;
      font-weight: 600;
      font-size: 1.2rem;
    }
    p {
      color: #7d8a9e;
      font-size: 0.9rem;
    }
  }
}
.modal-enter-active {
  transition: all 0.5s ease-out;
  //transform: ;
}
.modal-leave-active {
  transition: all 0.5s ease-in;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
