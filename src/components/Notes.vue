<template>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div class="container">
    
    <div class="d-flex">
        <!--Colocar titulo de la tarea
        <input
        v-model="ListStore.task"
        type="text"
        placeholder="Ingrese tarea"
        class="form-control"
      />-->
      <!--Colocar información de la tarea-->
      <input
        v-model="ListStore.task"
        type="text"
        placeholder="Ingrese tarea"
        class="form-control"
      />
      <button @click="ListStore.submitTask" class="btn btn-primary rounded-0">
        Aceptar
      </button>
    </div>
<div class="row">
    <div v-for="(task, index) in ListStore.tasksList" :key="index" class="col">
      <ul class="notes row">
        <li>
          <div class="rotate-1 col-sm  mt-5 mb-0" :class="{
              'bg-danger': task.is_complete === 'Pendiente',
              'bg-warning': task.is_complete === 'En Progreso',
              'bg-success': task.is_complete === 'Terminada',
              
            }">
            <small>{{ task.inserted_at }}</small>

            <h4 @click="ListStore.changeStatus(index)" class="pointer" :class="{
                'text-light': task.is_complete === 'Pendiente',
                'text-light': task.is_complete === 'En Progreso',
                'text-light': task.is_complete === 'Terminada',
                'finished' : task.is_complete === 'Terminada'
              }">
              {{ task.is_complete }}
            </h4>
    
            <p>{{ task.title }}</p>

            <a href="#" class="text-dark pull-left pull-button" @click="ListStore.editTask(index)">
                <i class="fa fa-pen"></i></a>
            <a href="#" class="text-dark pull-right" @click="ListStore.deleteTask(index)">
                <i class="fa fa-trash"></i></a>
          </div>
        </li>
      </ul>
    </div>
</div>
  </div>
</template>

<script>
import { onUpdated } from "vue";
import { store } from "../stores/store";
import { supabase } from "../supabase/index";
import { mapStores } from "pinia";
import useListStore from "../stores/List";

export default {
  name: "ToDoList",

  computed: {
    ...mapStores(useListStore),
  },

  mounted(){
        this.ListStore.CallData()
    }
};
</script>

<style scoped>

.finished{
        text-decoration: line-through;
    }

body {
  margin-top: 20px;
}

ul.notes li {
  margin: 10px 40px 50px 0px;
  float: left;
}

ul.notes li{
  list-style: none;
}

ul.notes li div small {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 10px;
}

div.rotate-1 {
  -webkit-transform: rotate(-6deg);
  -o-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
}

ul.notes li div {
  text-decoration: none;
  color: #000;
  display: block;
  height: 210px;
  width: 210px;
  padding: 1em;
  -moz-box-shadow: 5px 5px 7px #212121;
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  -moz-transition: -moz-transform 0.15s linear;
  -o-transition: -o-transform 0.15s linear;
  -webkit-transition: -webkit-transform 0.15s linear;
}
</style>
