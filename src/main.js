import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//Подключим компоненты
import TaskList from './components/TaskList.vue';

//Регистрируем компоненты
Vue.component ('TaskList', TaskList);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
