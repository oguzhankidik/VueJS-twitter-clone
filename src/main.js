import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/index.css'
import 'tw-elements';
const axios = import('axios').default;
let app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.axios=axios
