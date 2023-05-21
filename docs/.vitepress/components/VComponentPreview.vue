<template>
  <div class="v-component-preview">
    <slot />
  </div>
</template>

<style scoped>
.v-component-preview {
  position: relative;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 16px;
  padding: 20px;

  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
</style>
