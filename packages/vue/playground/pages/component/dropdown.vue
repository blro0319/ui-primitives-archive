<script setup lang="ts">
import { ref } from "vue";
import {
  VDropdown,
  VDropdownItem,
  VDropdownMenu,
  VDropdownTrigger,
} from "~/components";

const lastAction = ref(0);
</script>

<template>
  <div class="dropdown">
    <h1>VDropdown</h1>
    <article>
      <h2>Basic Usage</h2>
      <VDropdown>
        <VDropdownTrigger>Trigger</VDropdownTrigger>
        <VDropdownMenu>
          <VDropdownItem
            v-for="i in [1, 2, 3]"
            :key="i"
            @click="lastAction = i"
          >
            Item {{ i }}
          </VDropdownItem>
        </VDropdownMenu>
      </VDropdown>
      {{ lastAction }}
    </article>
    <article>
      <h2>Prevent Item Click</h2>
      <VDropdown>
        <VDropdownTrigger>Trigger</VDropdownTrigger>
        <VDropdownMenu>
          <VDropdownItem
            v-for="i in [1, 2, 3]"
            :key="i"
            @click.prevent="lastAction = i"
          >
            Item {{ i }}
          </VDropdownItem>
        </VDropdownMenu>
      </VDropdown>
      {{ lastAction }}
    </article>
  </div>
</template>

<style lang="scss" scoped>
:focus {
  outline: 2px solid red;
}
</style>
