<script setup lang="ts">
import { colorPickerStore } from "~/store/colorPickerStore";
</script>

<template>
  <section>
    <ul class="grid grid-cols-3 grid-rows-12 grid-flow-row h-fit w-fit gap-1.5">
      <li v-for="color in COLOR_PALETTE">
        <p
          class="p-8 border-2"
          :class="color"
          @click="colorPickerStore.setSelectedColor(color)"
        ></p>
      </li>
    </ul>
  </section>
</template>
