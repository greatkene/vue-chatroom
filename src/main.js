import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import router from './router'

import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router)

    // Mount the app to the DOM
    const instance = app.mount('#app')

    // Use the toast plugin
    const toast = useToast()
    let toastInstance = toast.success('You did it!')

    // Force dismiss specific toast
    toastInstance.dismiss()

    // Dismiss all opened toast immediately
    toast.clear()
  }
})
