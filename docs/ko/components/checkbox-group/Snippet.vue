<!-- #region script -->
<script setup lang="ts">
import {
  maxLength,
  required,
  VButton,
  VCheckbox,
  VCheckboxGroup,
  VCheckboxGroupDescription,
  VCheckboxGroupError,
  VCheckboxGroupTitle,
  VField,
  VFieldLabel,
  VForm,
} from "@blro/ui-primitives-vue";
import { ref } from "vue";

const form = ref<InstanceType<typeof VForm>>();

const favoriteFruits = ref<string[]>([]);

const OPTIONS = [
  { label: "사과", value: "apple" },
  { label: "바나나", value: "banana" },
  { label: "오렌지", value: "orange" },
  { label: "망고", value: "mango" },
  { label: "포도", value: "grape" },
  { label: "체리", value: "cherry" },
  { label: "키위", value: "kiwi" },
] as const satisfies Readonly<{ label: string; value: string }[]>;
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <VForm ref="form" class="form" @submit="form?.reset()">
    <VCheckboxGroup
      v-model="favoriteFruits"
      :rules="[required(), maxLength(3)]"
      :validity-messages="{
        required: '좋아하는 과일을 선택해주세요',
        maxLength: '최대 3개까지 선택할 수 있어요',
      }"
      class="group"
    >
      <VCheckboxGroupTitle class="title">좋아하는 과일</VCheckboxGroupTitle>
      <VCheckboxGroupDescription class="description">
        좋아하는 과일을 선택해주세요. 최대 3개까지 선택할 수 있습니다.
      </VCheckboxGroupDescription>
      <div class="list">
        <VField v-for="option in OPTIONS">
          <label class="field">
            <VCheckbox :value="option.value" class="checkbox" />
            <VFieldLabel class="label">{{ option.label }}</VFieldLabel>
          </label>
        </VField>
      </div>
      <VCheckboxGroupError class="error" />
    </VCheckboxGroup>
    <VButton type="submit" class="submit">제출</VButton>
  </VForm>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
button,
fieldset,
input,
legend {
  all: unset;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  font-weight: bold;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.field {
  cursor: pointer;

  display: flex;
  align-items: flex-start;
  gap: 4px;
}

.checkbox {
  --shadow-color: rgba(198 198 200 / 50%);

  box-sizing: border-box;

  position: relative;

  width: 16px;
  height: 16px;
  margin: 4px;

  border: 1px solid #d9d9d9;
  border-radius: 4px;

  box-shadow: 0 0 0 0 var(--shadow-color);

  transition: border 150ms, box-shadow 150ms;
}
.checkbox::before {
  content: "";

  opacity: 0;

  position: absolute;
  top: 50%;
  left: 50%;

  display: block;

  width: 8px;
  height: 8px;

  background-color: #10b981;
  border-radius: 2px;

  translate: -50% -50%;
  scale: 0;

  transition: scale 150ms, opacity 150ms;
}
.checkbox:hover,
.checkbox:focus-visible {
  box-shadow: 0 0 0 3px var(--shadow-color);
}
.checkbox:checked {
  --shadow-color: rgba(16 185 129 / 25%);

  border: 1px solid #10b981;
}
.checkbox:checked::before {
  opacity: 1;
  scale: 1;
}

.label {
  cursor: pointer;
}
.description {
  color: #565663;
  font-size: 14px;
}
.error {
  color: #f43f52;
  font-size: 14px;
}

.submit {
  cursor: pointer;

  align-self: flex-start;

  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 16px;

  background-color: #10b981;
  border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(16 185 129 / 0%);

  color: #ffffff;

  transition: background-color 150ms, box-shadow 150ms;
}
.submit:hover,
.submit:focus-visible {
  box-shadow: 0 0 0 4px rgba(16 185 129 / 25%);
}
.submit:active {
  background-color: #10a372;
}
</style>
<!-- #endregion styles -->
