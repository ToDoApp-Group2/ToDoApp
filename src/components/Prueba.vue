<template>
  <h1>
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

        }

    },
    methods: {
        async callTasks() {
           this.tasks = await supabase.from('tasks').select('title', 'is_complete').eq('user_id', this.user.id)
        }
    },
    mounted(){
        this.callTasks()
    }

}
</script>

<style>

</style>