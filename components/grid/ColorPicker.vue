<script setup lang="ts">
import { colorPickerStore } from "~/store/colorPickerStore";
</script>

<template>
  <section>
    <ul
      class="grid grid-flow-row grid-cols-3 gap-1 p-2 border-2 shadow-xl border-slate-400 grid-rows-12 h-fit w-fit"
    >
      <li
        v-for="color in COLOR_PALETTE"
        class="duration-150 border-2 cursor-pointer size-16 border-slate-950 hover:scale-105"
        :class="color"
        @click="colorPickerStore.setSelectedColor(color)"
      />
    </ul>
  </section>
</template>
