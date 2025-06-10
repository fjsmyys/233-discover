import { createApp } from 'vue';
import App from './App.vue';
import 'vant/lib/index.css';
import { PullRefresh, List } from 'vant';

const app = createApp(App);
app.use(PullRefresh);
app.use(List);
app.mount('#app');