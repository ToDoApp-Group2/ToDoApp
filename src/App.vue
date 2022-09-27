<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Profile v-if="store.user" />
    <Auth v-else />
    <ToDoList></ToDoList>
  </div>
</template>

<script>
  import { store } from './stores/store'
  import { supabase } from './supabase/index'
  import Auth from './components/Auth.vue'
  import Profile from './components/Profile.vue'
import ToDoList from './components/ToDoList.vue'

  export default {
    components: {
    Auth,
    Profile,
    ToDoList
},

    setup() {
      store.user = supabase.auth.user()
      supabase.auth.onAuthStateChange((_, session) => {
        store.user = session.user
      })

      return {
        store,
      }
    },
  }
</script>