<!-- #region script -->
<script setup lang="ts">
import {
  VDropdown,
  VDropdownItem,
  VDropdownMenu,
  VDropdownTrigger,
} from "@blro/ui-primitives-vue";
import { autoUpdate, offset, useFloating } from "@floating-ui/vue";
import { ref } from "vue";

const trigger = ref<InstanceType<typeof VDropdownTrigger>>();
const menu = ref<InstanceType<typeof VDropdownMenu>>();
const open = ref(false);

const lastAction = ref("없음");
const ACTIONS = ["새 탭에서 열기", "새 창에서 열기", "복사하기"] as const;

const { x, y } = useFloating(trigger, menu, {
  open,
  placement: "bottom-start",
  whileElementsMounted: autoUpdate,
  middleware: [offset(8)],
});
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <div class="snippet">
    <VDropdown @show-menu="open = true" @hide-menu="open = false">
      <VDropdownTrigger ref="trigger" class="trigger">
        메뉴 열기
      </VDropdownTrigger>
      <Transition name="menu">
        <VDropdownMenu
          ref="menu"
          :style="{ top: `${y}px`, left: `${x}px` }"
          class="menu"
        >
          <VDropdownItem
            v-for="action in ACTIONS"
            :key="action"
            class="item"
            @click="lastAction = action"
          >
            {{ action }}
          </VDropdownItem>
        </VDropdownMenu>
      </Transition>
    </VDropdown>
    마지막 동작: {{ lastAction }}
  </div>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
button {
  all: unset;
}

.trigger {
  cursor: pointer;
}

.menu {
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 180px;
  padding: 8px 0;

  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.menu-enter-active,
.menu-leave-active {
  transform-origin: left top;
  transition-property: opacity, scale;
  transition-duration: 150ms;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  scale: 90%;
}

.item {
  cursor: pointer;

  padding: 8px 12px;
  font-size: 14px;
  transition: background-color 100ms;
}
.item:hover,
.item:focus-visible {
  background-color: rgba(0, 0, 0, 4%);
}
.item:active {
  background-color: rgba(0, 0, 0, 8%);
}

.trigger {
  cursor: pointer;

  align-self: center;

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
.trigger:hover,
.trigger:focus-visible {
  box-shadow: 0 0 0 4px rgba(16 185 129 / 25%);
}
.trigger:active {
  background-color: #10a372;
}

.snippet {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
}
</style>
<!-- #endregion styles -->
