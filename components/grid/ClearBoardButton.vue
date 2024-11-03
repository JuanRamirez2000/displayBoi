<script setup lang="ts">
import { gridStore } from "~/store/gridStore";
</script>

<template>
  <button
    @click="gridStore.setClearBoard()"
    class="px-6 py-4 border-2 rounded-lg"
  >
    Clear Board
  </button>
</template>
