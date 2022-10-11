<template>

  <NavBar :nav-links="navLinks" />
 <router-view :key="$route.path"></router-view>
  <Notes></Notes>
  <Profile2></Profile2>
  <Footer></Footer>


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
import Auth2 from './components/Auths2.vue'
import router from './router/index.js';
import Auths2 from "./components/Auths2.vue";
import Profile2 from "./components/Profile2.vue";
import Footer from "./components/Footer.vue";
import Auths3 from "./components/Auths3.vue";
import SignIn from "./components/SignIn.vue";
import LogIn from "./components/LogIn.vue";


export default {
  components: {
    NavBar,
    Auth,
    Auth2,
    Profile,
    ToDoList,
    Prueba,
    SignInUP,
    Notes,
    Auths2,
    Profile2,
    Footer,
    Auths3,
    SignIn,
    LogIn,
},

data: () => ({
  navLinks:[
    {
      text:'Login',
      path:"/login",
    },
    {
      text:'Signup',
      path:'/signin',
    },

  ]
}),



  setup() {
    store.user = supabase.auth.user();
    supabase.auth.onAuthStateChange((_, session) => {
    store.user = session.user;
    });
    return {
      store,
    };
  },
  /*methods: {
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
  },*/

  mounted(){
    //callData()
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
