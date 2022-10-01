<template>
  <div>
    <SignInUP></SignInUP>
    <!--<Profile v-if="store.user" />
    <Auth v-else /> -->
  </div>
</template>

<script>
  import { store } from './stores/store'
  import { supabase } from './supabase/index'
  import Auth from './components/Auth.vue'
  import Profile from './components/Profile.vue'
import ToDoList from './components/ToDoList.vue'
import Prueba from './components/Prueba.vue'
import SignInUP from './components/SignInUP.vue'

  export default {
    components: {
    Auth,
    Profile,
    ToDoList,
    Prueba,
    SignInUP
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

<style scoped>
  div {
    padding: 0;
    margin: 0;
  };

  template {
    padding: 0;
    margin: 0;
  }
</style>