<!-- #region script -->
<script setup lang="ts">
import { ref } from "vue";
import {
  createRule,
  isEmail,
  minLength,
  pattern,
  required,
  VButton,
  VField,
  VFieldDescription,
  VFieldError,
  VFieldLabel,
  VForm,
  VTextInput,
} from "@blro/ui-primitives-vue";

const form = ref<InstanceType<typeof VForm>>();

const email = ref("");
const password = ref("");

function handleSubmit() {
  form.value.reset();
}
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <VForm class="form" ref="form" @submit="handleSubmit">
    <VField>
      <div class="field">
        <VFieldLabel class="label">이메일</VFieldLabel>
        <VTextInput
          v-model="email"
          type="email"
          :rules="[required(), isEmail()]"
          :validity-messages="{
            required: '이메일을 입력해주세요',
            isEmail: '이메일 형식으로 입력해주세요',
          }"
          class="input"
        />
        <VFieldError class="error" />
      </div>
    </VField>
    <VField report-when="change submit">
      <div class="field">
        <VFieldLabel class="label">비밀번호</VFieldLabel>
        <VFieldDescription class="description">
          대문자과 소문자, 숫자, 특수문자를 포함해 8자 이상으로 입력해주세요
        </VFieldDescription>
        <VTextInput
          v-model="password"
          type="password"
          :rules="[
            required(),
            minLength(8),
            createRule('lower', pattern(/[a-z]/).validator),
            createRule('upper', pattern(/[A-Z]/).validator),
            createRule('number', pattern(/[0-9]/).validator),
            createRule('symbol', pattern(/[!@#$%^&*()\-_=+]/).validator),
          ]"
          :validity-messages="{
            required: '비밀번호를 입력해주세요',
            minLength: '8자 이상 입력해주세요',
            lower: '소문자를 포함해주세요',
            upper: '대문자를 포함해주세요',
            number: '숫자를 포함해주세요',
            symbol: '특수문자를 포함해주세요',
          }"
          class="input"
        />
        <VFieldError as="ul" class="error" v-slot="{ reportedErrors }">
          <li v-for="error in reportedErrors">{{ error }}</li>
        </VFieldError>
      </div>
    </VField>
    <VButton type="submit" class="submit">회원 가입</VButton>
  </VForm>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
button,
input,
ul,
li {
  all: unset;
}
ul,
li {
  all: revert;
}
ul {
  margin: 0;
  padding-left: 24px;
}
li + li {
  margin-top: 4px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  max-width: 360px;
  padding: 0 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
}

.label {
  cursor: pointer;
  align-self: flex-start;
  font-size: 14px;
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

.input {
  box-sizing: border-box;

  width: 100%;
  padding: 6px 12px;

  border: 1px solid #e7e7e8;
  border-radius: 4px;
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
