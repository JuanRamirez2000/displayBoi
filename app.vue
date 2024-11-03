<script lang="tsx" setup>
const BASE_COLOR: string = "bg-slate-50";

const selectedColor = ref<string>(BASE_COLOR);

const setSelectedColor = (color: string) => {
  selectedColor.value = color;
};
</script>

<template>
  <main class="flex flex-row">
    <GridEditableGrid />
  </main>
</template>
