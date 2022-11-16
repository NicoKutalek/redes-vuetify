import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'


const app = createApp(App);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.use(vuetify)

registerPlugins(app)

app.mount('#app')
