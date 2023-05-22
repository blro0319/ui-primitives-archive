<script setup lang="ts">
import { ref } from "vue";
import { VContent, VContentTitle, VContentDescription } from "~/components";

const show = ref(false);
</script>

<template>
  <div class="content">
    <h1>VContent</h1>
    <article>
      <h2>Basic Usage</h2>
      <VContent>
        <VContentTitle>Content Title</VContentTitle>
        <VContentDescription>Description</VContentDescription>
      </VContent>
    </article>
    <article>
      <h2>Multiple Description</h2>
      <VContent>
        <VContentTitle>Content Title</VContentTitle>
        <VContentDescription>Description 1</VContentDescription>
        <VContentDescription>Description 2</VContentDescription>
      </VContent>
    </article>
    <article>
      <h2>Dynamic Description</h2>
      <VContent>
        <VContentTitle>Content Title</VContentTitle>
        <VContentDescription v-if="show">Dynamic</VContentDescription>
        <button @click="show = !show">Toggle</button>
      </VContent>
    </article>
    <article>
      <h2>As</h2>
      <VContent as="article">
        <VContentTitle as="h3">Content Title</VContentTitle>
        <VContentDescription as="p">Description</VContentDescription>
      </VContent>
    </article>
    <article>
      <h2>As Child</h2>
      <VContent as-child v-slot="props">
        <article v-bind="props">
          <VContentTitle as-child v-slot="props">
            <h3 v-bind="props">Child Title</h3>
          </VContentTitle>
          <VContentDescription as-child v-slot="props">
            <p v-bind="props">Child description</p>
          </VContentDescription>
        </article>
      </VContent>
    </article>
  </div>
</template>
