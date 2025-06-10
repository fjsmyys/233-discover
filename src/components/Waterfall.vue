<template>
  <div class="waterfall">
    <div class="column" v-for="(col, idx) in columns" :key="idx">
      <Card v-for="item in col" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import Card from './Card.vue';
const props = defineProps({ list: Array, column: { type: Number, default: 2 } });

const columns = computed(() => {
  // 简单分列
  const cols = Array.from({ length: props.column }, () => []);
  props.list.forEach((item, idx) => {
    cols[idx % props.column].push(item);
  });
  return cols;
});
</script>
<style scoped>
.waterfall {
  display: flex;
  gap: 8px;
}
.column {
  flex: 1;
}
</style>