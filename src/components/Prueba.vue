<template>
  <h1>{{this.statuses.data}}
    {{this.tasks.data}}</h1>
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
            //task : "",
            statuses : [],
        }

    },
    methods: {
        async callTasks() {
           this.tasks = await supabase.from('tasks').select('title', 'is_complete').eq('user_id', this.user.id)
        },

        async callStatus() {
            this.statuses = await supabase.from('tasks').select('is_complete').eq('user_id', this.user.id)
        },

        async CallData() {
            this.tasks = await supabase.from('tasks').select('title', 'is_complete').eq('user_id', this.user.id);
            this.statuses = await supabase.from('tasks').select('is_complete').eq('user_id', this.user.id)
        },

        /*deleteTask(index){
            this.tasks.splice(index, 1);*/
    },
    mounted(){
        this.CallData()
    }

}

</script>

<style>

</style>