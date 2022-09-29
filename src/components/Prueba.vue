<template>
  <h1> Lista de tareas:
    <br>
  <br>
    {{tasksList}}.
  <br>
  <br>
    Lista de estados: 
    <br>
  <br>
    {{statusesList}}</h1>
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
            statuses : [],
            tasksList : [],
            statusesList : [],
            //data : []
        }

    },
    methods: {
        
        async CallData() {
            this.tasks = await supabase.from('tasks').select('title, is_complete').eq('user_id', this.user.id);
            this.statuses = await supabase.from('tasks').select('is_complete').eq('user_id', this.user.id);

            console.log(this.tasks)

            for (let i = 0; i < this.tasks.data.length; i++) {
                this.tasksList.push(this.tasks.data[i]);
            }

            for (let i = 0; i < this.statuses.data.length; i++) {
                this.statusesList.push(this.statuses.data[i]);
            }

            console.log(this.tasksList)
            console.log(this.statusesList)
        },

    },
    mounted(){
        this.CallData()
    }

}

</script>

<style>

</style>