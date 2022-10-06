<template>
    <div class= "container">
        <h2 class= "text-center mt-5"> Tareas pendientes </h2>

        <!-- Input for a new task -->
        <div class="d-flex">
            <input v-model= "ListStore.task" type="text" placeholder="Ingrese tarea" class= "form-control">
            <button @click="ListStore.submitTask" class= "btn btn-primary rounded-0">Aceptar</button>
        </div>

        <!-- Task table -->
        <table class= "table table-bordered mt-5">
            <thead>
                <tr>
                    <th scope="col" class= "text-center">Tarea</th>
                    <th scope="col" class= "text-center">Estado</th>
                    <th scope="col" class= "text-center">Editar</th>
                    <th scope="col" class= "text-center">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in ListStore.tasksList" :key="index">
                    <td scope= "row" class= "text-center">
                        <span :class="{'finished' : task.is_complete === 'Terminada'}">
                            {{task.title}}
                        </span>
                    </td>
                    <td class= "text-center">
                        <span @click= "ListStore.changeStatus(index)" class= "pointer"
                        :class="{'text-danger': task.is_complete === 'Pendiente',
                        'text-warning' : task.is_complete === 'En Progreso',
                        'text-success' : task.is_complete === 'Terminada'}">{{task.is_complete}}</span>
                    </td>
                    <td>
                        <div class= "text-center pointer" @click= "ListStore.editTask(index)">
                            <span class= "fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div class= "text-center pointer" @click= "ListStore.deleteTask(index)">
                            <span class= "fa fa-trash"></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import { onUpdated } from 'vue';
import { store } from '../stores/store'
import { supabase } from '../supabase/index'
import { mapStores } from 'pinia';
import useListStore from "../stores/List";


export default {
    name: "ToDoList",

    methods: {
    async CallData() {
      this.tasks = await supabase
        .from("tasks")
        .select("title, is_complete, id")
        .eq("user_id", this.user.id);
      this.tasksList = [];
      for (let i = 0; i < this.tasks.data.length; i++) {
        this.tasksList.push(this.tasks.data[i]);
      }
    },
},
    computed: {
        ...mapStores(useListStore),
    },

    /*mounted(){
        ListStore.CallData()
    }*/
}

</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
    .finished{
        text-decoration: line-through;
    }
</style>