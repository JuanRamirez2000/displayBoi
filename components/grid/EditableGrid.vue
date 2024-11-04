<script setup lang="tsx">
const ROW_AMOUNT: number = 32;
const COL_AMOUNT: number = 32;

const gridColors = ref<string[][]>(
  Array.from(
    {
      length: ROW_AMOUNT,
    },
    () => new Array(COL_AMOUNT).fill(BASE_COLOR)
  )
);
const selectedColor = ref<string>(BASE_COLOR);
const isMouseDown = ref<boolean>(false);
const setMouseDown = () => {
  isMouseDown.value = !isMouseDown.value;
};
const xCoord = ref<number>(0);
const yCoord = ref<number>(0);

const setSelectedColor = (color: string) => {
  selectedColor.value = color;
};

const updateCellInfo = (
  row: number,
  col: number,
  selectedColor: string,
  mouseStatus: boolean
) => {
  xCoord.value = row;
  yCoord.value = col;
  if (mouseStatus) {
    const gridCopy = gridColors.value;
    gridCopy[row][col] = selectedColor;
    gridColors.value = gridCopy;
  }
};

const setClearBoard = () => {
  const clearBoard = Array.from(
    {
      length: ROW_AMOUNT,
    },
    () => new Array(COL_AMOUNT).fill(BASE_COLOR)
  );

  gridColors.value = clearBoard;
};

const updateBoard = () => {
  console.log(gridColors.value);
};
</script>

<template>
  <section class="flex flex-row">
    <section>
      <p>x: {{ xCoord }} y: {{ yCoord }}</p>
      <ul
        class="grid grid-flow-col grid-col-32 grid-rows-32 size-fit"
        @mousedown="setMouseDown"
        @mouseup="setMouseDown"
      >
        <template v-for="(row, rowIDX) in gridColors" class="flex">
          <div
            v-for="(col, colIDX) in row"
            class="transition-transform duration-150 border-2 cursor-pointer border-slate-950 hover:bg-slate-400 size-8 hover:scale-[1.2]"
            :class="col"
            @mouseover="
              updateCellInfo(rowIDX, colIDX, selectedColor, isMouseDown)
            "
            @click="updateCellInfo(rowIDX, colIDX, selectedColor, true)"
          ></div>
        </template>
      </ul>
    </section>
    <section>
      <ul
        class="grid grid-flow-row grid-cols-3 gap-1 p-2 border-2 shadow-xl border-slate-400 grid-rows-12 h-fit w-fit"
      >
        <li
          v-for="color in COLOR_PALETTE"
          class="flex items-center justify-center duration-150 border-2 cursor-pointer size-16 border-slate-950 hover:scale-105"
          :class="color"
          @click="setSelectedColor(color)"
        >
          <span
            v-if="color === selectedColor"
            class="p-2 border-2 rounded-full border-slate-950"
          >
          </span>
        </li>
      </ul>
      <div>
        <button @click="setClearBoard()" class="px-6 py-4 border-2 rounded-lg">
          Clear Board
        </button>
        <button class="px-6 py-4 border-2 rounded-lg" @click="updateBoard()">
          Upload Board
        </button>
      </div>
    </section>
  </section>
</template>
