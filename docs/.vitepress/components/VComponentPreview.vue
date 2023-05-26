<template>
  <div role="presentation" class="v-component-preview">
    <slot />
  </div>
</template>

<style scoped>
.v-component-preview {
  position: relative;
  z-index: 15;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
  padding: 64px 0;

  background-color: #f6f6f7;
  border-radius: 8px;

  color: #3c3c43;
}
</style>
