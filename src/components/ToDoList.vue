<template>
    <div class= "container">
        <h2 class= "text-center mt-5"> Tareas pendientes </h2>

        <!-- Input for a new task -->
        <div class="d-flex">
            <input v-model= "task" type="text" placeholder="Ingrese tarea" class= "form-control">
            <button @click="submitTask" class= "btn btn-primary rounded-0">Aceptar</button>
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
                <tr v-for="(task, index) in tasks" :key="index">
                    <td scope= "row" class= "text-center">
                        <span :class="{'finished' : task.status === 'Terminada'}">
                            {{task.name}}
                        </span>
                    </td>
                    <td class= "text-center">
                        <span @click= "changeStatus(index)" class= "pointer"
                        :class="{'text-danger': task.status === 'Pendiente',
                        'text-warning' : task.status === 'En Progreso',
                        'text-success' : task.status === 'Terminada'}">{{task.status}}</span>
                    </td>
                    <td>
                        <div class= "text-center pointer" @click= "editTask(index)">
                            <span class= "fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div class= "text-center pointer" @click= "deleteTask(index)">
                            <span class= "fa fa-trash"></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { slotFlagsText } from '@vue/shared'
import { store } from '../stores/store'
import { supabase } from '../supabase/index'

export default {
    name: "ToDoList",
    data(){
        return {
            //Para arriba son solo pruebas
            user : store.user,
            //userid : user.id,
            task: "",
            editedTask: null,
            statuses: ["Pendiente", "En Progreso", "Terminada"],
            //Tareas de prueba, eliminar cuando conectemos con BBDD.
            tasks: [
                {
                    name: "Terminar to do list.",
                    status: "Pendiente"
                },
                {
                    name: "Conectar con el API.",
                    status: "En Progreso"
                }
            ]
        }
    },
    methods: {
        submitTask(){
            console.log(this.user.id)
            if(this.task.length === 0) return;
            //Acá se debe ingresar una alerta para tareas vacias.
            if(this.editedTask === null){
                this.tasks.push({
                    name: this.task,
                    status: "Pendiente"
             });
            }else{
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }
            // To delete after add a new task
            this.task = "";
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },
        changeStatus(index){
            let newIndex = this.statuses.indexOf(this.tasks[index].status);
            if(++newIndex > 2) newIndex = 0;
            this.tasks[index].status = this.statuses[newIndex];
        }
    }
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