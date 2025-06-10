<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <Waterfall :list="list" :column="2" />
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    />
  </van-pull-refresh>
</template>

<script setup>
import { ref } from 'vue';
import { getMockData } from './api/mock';
import Waterfall from './components/Waterfall.vue';

const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type') || 'img';

const list = ref([]);
const page = ref(1);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const pageSize = 10;

const loadData = async (reset = false) => {
  if (reset) {
    page.value = 1;
    finished.value = false;
    list.value = [];
  }
  loading.value = true;
  const data = await getMockData(type, page.value, pageSize);
  if (data.length < pageSize) finished.value = true;
  list.value = reset ? data : list.value.concat(data);
  loading.value = false;
  refreshing.value = false;
  page.value++;
};

const onLoad = () => loadData();
const onRefresh = () => loadData(true);

loadData();
</script>

<style>
body {
  margin: 0;
  background: #f5f5f5;
}
</style>