<!-- #region script -->
<script setup lang="ts">
import {
  VField,
  VFieldLabel,
  VFieldDescription,
  VFieldset,
  VFieldsetDescription,
  VFieldsetTitle,
  VRadio,
} from "@blro/ui-primitives-vue";
import { ref } from "vue";

const value = ref("vue");

const OPTIONS = [
  { label: "Vue", value: "vue" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Vue 2", value: "vue2" },
  { label: "Nuxt 2", value: "nuxt2" },
] as const satisfies Readonly<{ label: string; value: string }[]>;
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <VFieldset class="fieldset">
    <VFieldsetTitle class="title">프로젝트 템플릿</VFieldsetTitle>
    <VFieldsetDescription class="description">
      실제 제품을 개발할 때는 Nuxt와 같은 프레임워크를 사용하는 것이 좋습니다.
    </VFieldsetDescription>
    <div class="radio-group">
      <VField v-for="option in OPTIONS" :key="option.value">
        <label class="field">
          <VRadio
            v-model="value"
            :value="option.value"
            name="group1"
            class="radio"
          />
          <VFieldLabel class="label">{{ option.label }}</VFieldLabel>
          <VFieldDescription
            v-if="option.value === 'nuxt'"
            class="field-description"
          >
            (추천됨)
          </VFieldDescription>
        </label>
      </VField>
    </div>
  </VFieldset>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
/* 스타일 초기화 */
fieldset,
legend,
input {
  all: unset;
}

.fieldset {
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  max-width: 360px;
}
.title {
  font-weight: bold;
}
.description {
  color: #565663;
  font-size: 14px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.field {
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  width: fit-content;

  padding: 0 4px;
}

.radio {
  --shadow-color: rgba(198 198 200 / 50%);

  box-sizing: border-box;

  width: 16px;
  height: 16px;

  border: 1px solid #c6c6c8;
  border-radius: 8px;

  box-shadow: 0 0 0 0 var(--shadow-color);

  transition: border 150ms, box-shadow 150ms;
}
.radio:checked {
  --shadow-color: rgba(16 185 129 / 25%);

  border-width: 5px;
  border-color: #10b981;
}
.radio:hover,
.radio:focus-visible {
  box-shadow: 0 0 0 3px var(--shadow-color);
}

.label {
  cursor: pointer;
}
.field-description {
  font-size: 12px;
}
</style>
<!-- #endregion styles -->
