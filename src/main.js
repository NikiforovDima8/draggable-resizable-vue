import { createApp } from 'vue'
import App from './App.vue'

import DraggableResizableVue from './index'

const app = createApp(App)

app.use(DraggableResizableVue)

app.mount('#app')
