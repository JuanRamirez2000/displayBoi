<script setup lang="tsx">
import { colorPickerStore } from "~/store/colorPickerStore";
import { gridStore } from "~/store/gridStore";

const isMouseDown = ref<boolean>(false);
const setMouseDown = () => {
  isMouseDown.value = !isMouseDown.value;
};
</script>

<template>
  <section>
    <ul
      class="grid grid-col-32 grid-rows-32 grid-flow-col size-[72rem]"
      @mousedown="setMouseDown"
      @mouseup="setMouseDown"
    >
      <template v-for="(row, rowIDX) in gridStore.gridColors" class="flex">
        <div
          v-for="(col, colIDX) in row"
          class="border-2 border-black hover:bg-slate-400"
          :class="col"
          @mouseover="
            gridStore.setCellColor(
              rowIDX,
              colIDX,
              colorPickerStore.selectedColor,
              isMouseDown
            )
          "
          @click="
            gridStore.setCellColor(
              rowIDX,
              colIDX,
              colorPickerStore.selectedColor,
              true
            )
          "
        ></div>
      </template>
    </ul>
  </section>
</template>
