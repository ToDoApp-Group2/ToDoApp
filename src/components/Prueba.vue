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
                        <span :class="{'finished' : task.is_complete === 'Terminada'}">
                            {{task.title}}
                        </span>
                    </td>
                    <td class= "text-center">
                        <span @click= "changeStatus(index)" class= "pointer"
                        :class="{'text-danger': task.is_complete === 'Pendiente',
                        'text-warning' : task.is_complete === 'En Progreso',
                        'text-success' : task.is_complete === 'Terminada'}">{{task.is_complete}}</span>
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
import { onUpdated } from 'vue';
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
            editedTask : null,
            //data : []
        }

    },
    methods: {
        
        async CallData() {
            this.tasks = await supabase.from('tasks').select('title, is_complete, id').eq('user_id', this.user.id);
            this.tasksList = [];
            for (let i = 0; i < this.tasks.data.length; i++) {
                this.tasksList.push(this.tasks.data[i]);
            }
        },


        async submitTask(){
            if(this.task.length < 4) return alert("Ingresa más de 3 letras");
            //Acá se debe ingresar una alerta para tareas vacias.
            if(this.editedTask === null){
                console.log(1)
                await supabase.from('tasks').insert({ title: this.task, /*id: this.tasksList.length,*/ user_id: this.user.id});
                this.CallData();
                /*this.tasksList.push({
                    title: this.task,
                    is_complete: 0,
                    id: newTask.data.id});*/                   
            }else{
                this.tasksList[this.editedTask].title = this.task;
                this.editedTask = null;
                for (let i=0; i < this.tasksList.length; ++i){
                    console.log(this.tasksList[i].id)
                    await supabase.from('tasks').update({title: this.tasksList[i].title}).eq('id', this.tasksList[i].id);
            }}
            // To delete after add a new task
            this.task = "";
        },

        async deleteTask(index){
            console.log(this.tasksList[index]);
            await supabase.from('tasks').delete().eq('id', this.tasksList[index].id)
            this.tasksList.splice(index, 1);
        },

        editTask(index){
            this.task = this.tasksList[index].title;
            this.editedTask = index;
        },

        async changeStatus(index){
            let newIndex = this.statuses.indexOf(this.tasksList[index].is_complete);
            if(++newIndex > 2) newIndex = 0;
            this.tasksList[index].is_complete = this.statuses[newIndex];
            await supabase.from('tasks').update({ is_complete: this.statuses[newIndex]}).eq('id', this.tasksList[index].id);
            //this.CallData();
        }
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