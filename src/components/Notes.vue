<template>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div class="vh-100" style="background-color: #212529">
    <div
      class="container py-5 h-100"
      
    >
      <div class="card rounded-3 bg-image" style="
        background-image: url('https://img.freepik.com/foto-gratis/textura-madera-pino_1194-5372.jpg?w=996&t=st=1665239508~exp=1665240108~hmac=01e3b3673af429c47ba8181ecf8a725fb7e18ce3d3f6d8a5c9a6006094760b05');
        height: 100vh;
        background-size: auto 100%;
       
      ">
        <div class="card-body p-4">
          <div class="text-center pt-4 pb-3 mr-10">
            <img
              src="/src/assets/logocheckme.png"
              alt="Check"
              width="110"
            />
            <h2 class="my-1 mb-5">Task List</h2>
          </div>
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
            <button
              @click="ListStore.submitTask"
              class="btn btn-warning ms-2 text-white"
            >
              Aceptar
            </button>
          </div>

          <div class="row mt-5">
            <div
              v-for="(task, index) in ListStore.tasksList"
              :key="index"
              class="col"
            >
              <ul class="notes row">
                <li>
                  <div
                    class="rotate-1 col-sm mt-5 mb-0"
                    :class="{
                      'bg-danger bg-gradient': task.is_complete === 'Pendiente',
                      'bg-warning bg-gradient':
                        task.is_complete === 'En Progreso',
                      'bg-success bg-gradient':
                        task.is_complete === 'Terminada',
                    }"
                  >
                    <h3>{{ task.title }}</h3>

                    <h5
                      @click="ListStore.changeStatus(index)"
                      class="pointer"
                      :class="{
                        'text-light': task.is_complete === 'Pendiente',
                        'text-light': task.is_complete === 'En Progreso',
                        'text-light': task.is_complete === 'Terminada',
                        finished: task.is_complete === 'Terminada',
                      }"
                    >
                      {{ task.is_complete }}
                    </h5>
                    <hr class="hr hr-blurry" />

                    <a
                      href="#"
                      class="text-dark pull-left pull-button"
                      @click="ListStore.editTask(index)"
                    >
                      <i class="far fa-edit"></i
                    ></a>
                    <a
                      href="#"
                      class="text-dark pull-right"
                      @click="ListStore.deleteTask(index)"
                    >
                      <i class="fa fa-trash-alt"></i
                    ></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
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

  mounted() {
    this.ListStore.CallData();
  },
};
</script>

<style scoped>
.finished {
  text-decoration: line-through;
}

body {
  margin-top: 20px;
}

ul.notes li {
  margin: 10px 40px 50px 0px;
  float: left;
}

ul.notes li {
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
  text-align: center;
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
