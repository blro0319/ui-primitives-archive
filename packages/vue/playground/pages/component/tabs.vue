<script setup lang="ts">
import { ref } from "vue";
import { VTabs, VTabsList, VTabsPanel, VTabsTrigger } from "~/components";

const TABS = ["first", "second", "third"] as const;

const value = ref("first");
</script>

<template>
  <div class="tabs">
    <h1>VTabs</h1>
    <article>
      <h2>Basic Usage</h2>
      <VTabs v-model="value">
        <VTabsList class="tabs__horizontal">
          <VTabsTrigger v-for="tab in TABS" :key="tab" :value="tab" />
        </VTabsList>
        <VTabsPanel value="first">First Tab</VTabsPanel>
        <VTabsPanel value="second">Second Tab</VTabsPanel>
        <VTabsPanel value="third">Third Tab</VTabsPanel>
      </VTabs>
    </article>
    <article>
      <h2>Vertical</h2>
      <VTabs v-model="value" orientation="vertical">
        <VTabsList class="tabs__vertical">
          <VTabsTrigger v-for="tab in TABS" :key="tab" :value="tab" />
        </VTabsList>
        <VTabsPanel value="first">First Tab</VTabsPanel>
        <VTabsPanel value="second">Second Tab</VTabsPanel>
        <VTabsPanel value="third">Third Tab</VTabsPanel>
      </VTabs>
    </article>
    <article>
      <h2>Manual</h2>
      <VTabs v-model="value" activation-mode="manual">
        <VTabsList class="tabs__horizontal">
          <VTabsTrigger v-for="tab in TABS" :key="tab" :value="tab" />
        </VTabsList>
        <VTabsPanel value="first">First Tab</VTabsPanel>
        <VTabsPanel value="second">Second Tab</VTabsPanel>
        <VTabsPanel value="third">Third Tab</VTabsPanel>
      </VTabs>
    </article>
    <article>
      <h2>Loop</h2>
      <VTabs v-model="value">
        <VTabsList class="tabs__horizontal" loop>
          <VTabsTrigger v-for="tab in TABS" :key="tab" :value="tab" />
        </VTabsList>
        <VTabsPanel value="first">First Tab</VTabsPanel>
        <VTabsPanel value="second">Second Tab</VTabsPanel>
        <VTabsPanel value="third">Third Tab</VTabsPanel>
      </VTabs>
    </article>
    <article>
      <h2>Disabled</h2>
      <VTabs v-model="value">
        <VTabsList class="tabs__horizontal">
          <VTabsTrigger
            v-for="tab in TABS"
            :key="tab"
            :value="tab"
            :disabled="tab === 'second'"
          />
        </VTabsList>
        <VTabsPanel value="first">First Tab</VTabsPanel>
        <VTabsPanel value="second">Second Tab</VTabsPanel>
        <VTabsPanel value="third">Third Tab</VTabsPanel>
      </VTabs>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  &__horizontal {
    display: flex;
    gap: 8px;
  }
  &__vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
