import Vue from 'vue'
import App from './App.vue'

/*import css from '../public/css/scrollbar.css'*/

Vue.config.productionTip = false

new Vue({
  /*css,*/
  render: h => h(App),
}).$mount('#app')
