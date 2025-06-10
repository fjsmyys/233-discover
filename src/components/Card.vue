<template>
  <div class="card">
    <div class="title">{{ item.title }}</div>
    <img v-if="item.type === 'img'" :src="item.url" alt="图片" />
    <video v-else controls :src="item.url" style="width: 100%"></video>
  </div>
</template>
<script setup>
defineProps({ item: Object });
</script>
<style scoped>
.card {
  margin-bottom: 16px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px #eee;
}
.title {
  font-size: 14px;
  padding: 8px;
}
img {
  width: 100%;
  display: block;
}
</style>