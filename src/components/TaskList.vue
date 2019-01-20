<template>
  <div class="wrapper-TaskList-Component">
      <div class="form">
        <input type="text" class="form-control" placeholder="Add task" id="itemForm"/>
        <div class="input-group-append">
          <button class="btn" v-on:click="addItem">Add</button>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr class="items-task">
            <th scope="col">Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items"> <!--Деректива v-for - необходима для вывода массива данных где items - массив с данными, item - новый массив для вывода данных из массива-->
            <th scope="row">
                <span>{{ item.text }}</span>
                <button v-on:click="deleteItem(index)" class="btn-danger">X</button>
            </th>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  export default {
    data () {
     return {
       //Массив данных
       items: [
         {text: 'First'},
         {text: 'Second'},
         {text: 'First'},
         {text: 'Second'}
       ]
      }
    },
    methods: {
        //Событие клика на кнопке Add
        addItem: function() {
          let input = document.getElementById('itemForm'); //Запишем в переменную input наш input с id="itemForm"
          //Если значение input не пустое  
          if (input.value !== '') {
            this.items.push({ //С помощью метода push добавим в массив items новое значение 
              text: input.value
            }) 
          }
        },
        //Событие клика на кнопке Удалить
        deleteItem: function(index) {
          this.items.splice(index, 1); //Возьмем массив items и с помощью метода splice будем его изменять и возвращать назад (поиск элемента в массиве по его индексу)
        }
    }
  }
</script>

<!--Стили только для данного компонента scoped (значит только для этого компонента)-->
<style scoped>
 .wrapper-TaskList-Component {
   max-width: 1400px;
   margin: auto;
   padding: 20px;
   border: 1px solid silver;
 }
  .form-control {
    width: 100%;
    padding: 10px;
    max-width: 700px;
  }
  .input-group-append {
    display: inline-block;
  }
  .btn {
    width: 50px;
    height: 38px;
    margin-left: 20px;
    border-radius: 5px;
  }
  .table {
    margin-top: 20px;
  }
  thead {
    text-align: left;
    font-size: 24px;
  }
  tr {
    padding-top: 10px;
    display: block;
  }
  th {
    text-align: left;
  }
  span {
    min-width: 200px;
    display: inline-block;
  }
  .items-task {
    text-align: left;
  }
  .btn-danger {
    width: 30px;
    height: 27px;
    margin-left: 50px;
    background: red;
    color: white;
  }

</style>


