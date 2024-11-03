import { reactive } from "vue";

const ROW_AMOUNT: number = 32;
const COL_AMOUNT: number = 32;

interface gridStoreProps {
  gridColors: string[][];
  setCellColor: (
    row: number,
    col: number,
    selectedColor: string,
    mouseStatus?: boolean
  ) => void;
  setClearBoard: () => void;
}

export const gridStore = reactive<gridStoreProps>({
  gridColors: Array.from(
    {
      length: ROW_AMOUNT,
    },
    () => new Array(COL_AMOUNT).fill(BASE_COLOR)
  ),
  setClearBoard() {
    const clearBoard = Array.from(
      {
        length: ROW_AMOUNT,
      },
      () => new Array(COL_AMOUNT).fill(BASE_COLOR)
    );

    this.gridColors = clearBoard;
  },
  setCellColor(row, col, selectedColor, mouseStatus) {
    if (mouseStatus) {
      const gridCopy = this.gridColors.map((row) => row.slice());
      gridCopy[row][col] = selectedColor;
      this.gridColors = gridCopy;
    }
  },
});
