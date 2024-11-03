<script setup lang="ts">
interface staticGridProps {
  grid: string[][];
}

const { grid } = defineProps<staticGridProps>();
</script>

<template>
  <section>
    <ul class="grid grid-col-32 grid-rows-32 grid-flow-col size-[72rem]">
      <template v-for="row in grid" class="flex">
        <div
          v-for="col in row"
          class="border-2 border-black hover:bg-slate-400"
          :class="col"
        ></div>
      </template>
    </ul>
  </section>
</template>
