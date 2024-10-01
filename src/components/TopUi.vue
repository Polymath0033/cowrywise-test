<template>
      <header class="header">
        <slot/>
      </header>
</template>
<style lang="scss" scoped>
.header {
  position: relative;
  height: 250px;
  width: 100%;
   background-color: $color-accent-dark;
  display: grid;
  place-items: center;
  align-items: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  padding: 2rem 3rem;
  @include respond-to('mobile'){
    height: 200px;
    padding: 2rem;
  }
}
</style>