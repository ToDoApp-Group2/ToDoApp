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
                <tr v-for="(task, index) in tasksList" :key="index">
                    <td scope= "row" class= "text-center">
                        <span :class="{'finished' : task.status === '2'}">
                            {{task.title}}
                        </span>
                    </td>
                    <td class= "text-center">
                        <span @click= "changeStatus(index)" class= "pointer"
                        :class="{'text-danger': task.is_complete === '0',
                        'text-warning' : task.is_complete === '1',
                        'text-success' : task.is_complete === '2'}">{{task.is_complete}}</span>
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
import { store } from '../stores/store'
import { supabase } from '../supabase/index'

export default {
    name: "Prueba",
    data(){
        return{
            user : supabase.auth.user(),
            tasks: [],
            //userid : user.id,
            task : "",
            statuses : ["Pendiente", "En Progreso", "Terminada"],
            tasksList : [],
            //data : []
        }

    },
    methods: {
        
        async CallData() {
            this.tasks = await supabase.from('tasks').select('title, is_complete').eq('user_id', this.user.id);

            console.log(this.tasks)

            for (let i = 0; i < this.tasks.data.length; i++) {
                this.tasksList.push(this.tasks.data[i]);
            }
        },

        submitTask(){
            if(this.task.length === 0) return;
            //Acá se debe ingresar una alerta para tareas vacias.
            if(this.editedTask === null){
                this.tasksList.push({
                    title: this.task,
                    is_complete: 0,
             });
            }else{
                this.tasksList[this.editedTask].title = this.task;
                this.editedTask = null;
            }
            // To delete after add a new task
            this.task = "";
        },

        deleteTask(index){
            this.tasksList.splice(index, 1);
        },

        editTask(index){
            this.task = this.tasksList[index].title;
            this.editedTask = index;
        },
    },
    mounted(){
        this.CallData()
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