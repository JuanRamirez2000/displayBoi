<script setup lang="ts">
import { gridStore } from "~/store/gridStore";
</script>

<template>
  <button @click="gridStore.setClearBoard()">Clear Board</button>
</template>
