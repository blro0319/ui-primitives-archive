<!-- #region script -->
<script setup lang="ts">
import {
  required,
  VCheckbox,
  VField,
  VFieldDescription,
  VFieldError,
  VFieldLabel,
  VForm,
} from "@blro/ui-primitives-vue";
import { ref } from "vue";

const terms = ref(false);
const marketing = ref(false);

const form = ref<InstanceType<typeof VForm>>();
function handleSubmit() {
  form.value.reset();
}
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <VForm ref="form" class="form" @submit="handleSubmit">
    <VField>
      <label class="field">
        <VCheckbox
          v-model="terms"
          :rules="[required()]"
          :validity-messages="{ required: '서비스 이용약관에 동의해주세요' }"
          class="checkbox"
        />
        <div class="text-group">
          <VFieldLabel class="label">서비스 이용약관</VFieldLabel>
          <VFieldError class="error" />
        </div>
      </label>
    </VField>
    <VField>
      <label class="field">
        <VCheckbox v-model="marketing" class="checkbox" />
        <div class="text-group">
          <VFieldLabel class="label">광고 수신 동의</VFieldLabel>
          <VFieldDescription class="description">
            푸시 알림과 메일을 통해 전달됩니다
          </VFieldDescription>
        </div>
      </label>
    </VField>
    <button class="submit">제출</button>
  </VForm>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
/* 스타일 초기화 */
button,
input {
  all: unset;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field {
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

[aria-required="true"] + .text-group > .label::after {
  content: "*";
  color: #f43f52;
  font-weight: bold;
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
