<script lang="tsx" setup>
const ROW_AMOUNT: number = 32;
const COL_AMOUNT: number = 32;
const BASE_COLOR: string = "bg-slate-50";

const grid = ref<string[][]>(
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

const setSelectedColor = (color: string) => {
  selectedColor.value = color;
};

const setCellColor = (row: number, col: number, mouseClick?: boolean) => {
  if (isMouseDown.value || mouseClick) {
    const gridCopy = grid.value.map((row) => row.slice());
    gridCopy[row][col] = selectedColor.value;
    grid.value = gridCopy;
  }
};

const setClearBoard = () => {
  const clearBoard = Array.from(
    {
      length: ROW_AMOUNT,
    },
    () => new Array(COL_AMOUNT).fill(BASE_COLOR)
  );

  grid.value = clearBoard;
};
</script>

<template>
  <main class="flex flex-row">
    <section>
      <ul
        class="grid grid-col-32 grid-rows-32 grid-flow-col size-[72rem]"
        @mousedown="setMouseDown"
        @mouseup="setMouseDown"
      >
        <template v-for="(row, rowIDX) in grid" class="flex">
          <div
            v-for="(col, colIDX) in row"
            class="border-2 border-black hover:bg-slate-400"
            :class="col"
            @mouseover="setCellColor(rowIDX, colIDX)"
            @click="setCellColor(rowIDX, colIDX, true)"
          ></div>
        </template>
      </ul>
    </section>
    <section>
      <ul
        class="grid grid-cols-3 grid-rows-12 grid-flow-row h-fit w-fit gap-1.5"
      >
        <li v-for="color in COLOR_PALETTE">
          <p
            class="p-8 border-2"
            :class="color"
            @click="setSelectedColor(color)"
          ></p>
        </li>
      </ul>
      <button @click="setClearBoard">Clear Board</button>
    </section>
  </main>
</template>
