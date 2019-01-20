<template>
  <div id="app">
    <h1>{{ message }}</h1> <!--Интерполяция для вывода данных переданных в объект massage-->
    <TaskList /> <!--Экспорт компонента--> 
  </div>
</template>

<script>
  import StartScreen from './components/TaskList.vue'

  export default {
    data () {
      return {
        message: 'Task List Vue'
      }
    },
   
  }
</script>

