<template>

<NavBar />
    <SignInUP></SignInUP>
  <div class="container" style="padding: 50px 0 100px 0">
    <router-link to="/prueba">Prueba</router-link>
  
    <!--<Profile v-if="store.user" />
    <Auth v-else />
    <Prueba></Prueba>
    <ToDoList></ToDoList>-->

  </div>
  <router-view></router-view>
</template>

<script>
import { store } from "./stores/store";
import { supabase } from "./supabase/index";
import NavBar from "./components/NavBar.vue"
import Auth from "./components/Auth.vue";
import Profile from "./components/Profile.vue";
import ToDoList from "./components/ToDoList.vue";
import Prueba from "./components/Prueba.vue";
import Notes from "./components/Notes.vue"
import callData from "./stores/List"
import SignInUP from './components/SignInUP.vue'
import router from './router/index.js';


export default {
  components: {
  NavBar,
    Auth,
    Profile,
    ToDoList,
    Prueba,
    SignInUP,
    Notes,
  },



  setup() {
    store.user = supabase.auth.user();
    supabase.auth.onAuthStateChange((_, session) => {
    store.user = session.user;
    });
    return {
      store,
    };
  },
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

  mounted(){
    callData()
  },
};
</script>

<style>
  div {
    padding: 0;
    margin: 0;
  };

  template {
    padding: 0;
    margin: 0;
  }
</style>
