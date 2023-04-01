import { createApp } from 'vue'
import App from './App.vue'
import VueNotification from "@kugatsu/vuenotification"


createApp(App)
.use(VueNotification,{
    timer: 20
})

.mount('#app')


