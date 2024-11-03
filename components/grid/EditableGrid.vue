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
      class="grid grid-flow-col grid-col-32 grid-rows-32 size-fit"
      @mousedown="setMouseDown"
      @mouseup="setMouseDown"
    >
      <template v-for="(row, rowIDX) in gridStore.gridColors" class="flex">
        <div
          v-for="(col, colIDX) in row"
          class="transition-transform duration-150 border-2 cursor-pointer border-slate-950 hover:bg-slate-400 size-8 hover:scale-[1.2]"
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
