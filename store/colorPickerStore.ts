import { reactive } from "vue";
import { gridStore } from "./gridStore";

interface colorPickerStoreProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export const colorPickerStore = reactive<colorPickerStoreProps>({
  selectedColor: BASE_COLOR,
  setSelectedColor(color: string) {
    this.selectedColor = color;
  },
});
