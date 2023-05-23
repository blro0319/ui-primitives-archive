<script setup lang="ts">
import { VButton, VRovingTabindex, VRovingTabindexItem } from "~/components";
</script>

<template>
  <div class="roving-tabindex">
    <h1>VRovingTabindex</h1>
    <article>
      <h2>Basic Usage</h2>
      <VRovingTabindex>
        <VRovingTabindexItem>Item 1</VRovingTabindexItem>
        <VRovingTabindexItem>Item 2</VRovingTabindexItem>
        <VRovingTabindexItem>Item 3</VRovingTabindexItem>
      </VRovingTabindex>
    </article>
    <article>
      <h2>Vertical</h2>
      <VRovingTabindex
        orientation="vertical"
        style="display: flex; flex-direction: column; align-items: flex-start"
      >
        <VRovingTabindexItem>Item 1</VRovingTabindexItem>
        <VRovingTabindexItem>Item 2</VRovingTabindexItem>
        <VRovingTabindexItem>Item 3</VRovingTabindexItem>
      </VRovingTabindex>
    </article>
    <article>
      <h2>Loop</h2>
      <VRovingTabindex loop>
        <VRovingTabindexItem>Item 1</VRovingTabindexItem>
        <VRovingTabindexItem>Item 2</VRovingTabindexItem>
        <VRovingTabindexItem>Item 3</VRovingTabindexItem>
      </VRovingTabindex>
    </article>
    <article>
      <h2>Disabled</h2>
      <VRovingTabindex loop>
        <VRovingTabindexItem>Item 1</VRovingTabindexItem>
        <VRovingTabindexItem disabled>Item 2</VRovingTabindexItem>
        <VRovingTabindexItem>Item 3</VRovingTabindexItem>
        <VRovingTabindexItem disabled>Item 4</VRovingTabindexItem>
        <VRovingTabindexItem disabled>Item 5</VRovingTabindexItem>
        <VRovingTabindexItem disabled>Item 6</VRovingTabindexItem>
        <VRovingTabindexItem>Item 7</VRovingTabindexItem>
      </VRovingTabindex>
    </article>
    <article>
      <h2>As</h2>
      <VRovingTabindex as="article">
        <VRovingTabindexItem :as="VButton">Item 1</VRovingTabindexItem>
        <VRovingTabindexItem :as="VButton">Item 2</VRovingTabindexItem>
        <VRovingTabindexItem :as="VButton">Item 3</VRovingTabindexItem>
      </VRovingTabindex>
    </article>
    <article>
      <h2>As Child</h2>
      <VRovingTabindex as-child v-slot="props">
        <article v-bind="props">
          <VRovingTabindexItem as-child v-slot="props">
            <button v-bind="props">Item 1</button>
          </VRovingTabindexItem>
          <VRovingTabindexItem as-child v-slot="props">
            <button v-bind="props">Item 2</button>
          </VRovingTabindexItem>
          <VRovingTabindexItem as-child v-slot="props">
            <button v-bind="props">Item 3</button>
          </VRovingTabindexItem>
        </article>
      </VRovingTabindex>
    </article>
    <article>
      <h2>Nested</h2>
      <VRovingTabindex>
        <VRovingTabindexItem>Item 1</VRovingTabindexItem>
        <VRovingTabindexItem>Item 2</VRovingTabindexItem>
        <VRovingTabindexItem>Item 3</VRovingTabindexItem>
        <VRovingTabindex>
          <VRovingTabindexItem>Item 1</VRovingTabindexItem>
          <VRovingTabindexItem>Item 2</VRovingTabindexItem>
          <VRovingTabindexItem>Item 3</VRovingTabindexItem>
        </VRovingTabindex>
      </VRovingTabindex>
    </article>
  </div>
</template>

<style lang="scss" scoped>
:focus {
  outline: 2px solid red;
}
[aria-disabled="true"] {
  opacity: 0.5;
}
</style>
