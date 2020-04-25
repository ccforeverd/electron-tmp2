/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import Vue, { VNode } from 'vue'

// vuetify
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
// import 'roboto-fontface/css/roboto/roboto-fontface.css' // 有引入字体报错
// import '@mdi/font/css/materialdesignicons.css' // 有引入字体报错

// element-ui
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' // 依然有引入字体的报错

import './index.css'
import App from './components/App'

Vue.use(Vuetify)
Vue.use(ElementUI)

// eslint-disable-next-line no-new
new Vue({
  vuetify: new Vuetify({
    themes: {
      dark: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
      }
    }
  }),
  render: (h): VNode => h(App)
}).$mount('#app')
