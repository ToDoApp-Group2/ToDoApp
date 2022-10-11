<template>
    
      <!-- Section: Design Block 2 -->
      <section class="text-center text-lg-start">
        <!-- Jumbotron -->
        <div class="container py-4">
          <div class="row g-0 align-items-center">
            <div
              class="bg-image w-50 rounded-4 shadow-4 col-lg-6 mb-5 mb-lg-0 d-flex align-items-center justify-content-center"
              style="
                background-image: url('https://images.pexels.com/photos/7582013/pexels-photo-7582013.jpeg');
                height: 100vh;
                background-size: auto 100%;
                background-repeat: no-repeat;
              "
            >
              <div class="p-2 bd-highlight text-center">
                <h2>Create Account</h2>

                <button>Logup</button>
              </div>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div
                class="card cascading-left"
                style="
                  background: hsla(0, 0%, 100%, 0.55);
                  backdrop-filter: blur(30px);
                "
              >
                <div class="card-body p-5 shadow-5 text-center">
                  <h2 class="fw-bold mb-4">Log in</h2>
                  <p class="mb-5 fw-bold text-warning">"DO <del>UBT</del>"</p>

                  <form @submit.prevent="LogInStore.handleLogin()">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example4"
                        class="form-control"
                        placeholder="name@example.com"
                        v-model="LogInStore.email"
                      />
                      <label class="form-label" for="form1Example4"
                        >Email address</label
                      >
                    </div>

                    <!-- Submit button -->
                    <button
                      type="submit"
                      class="btn btn-warning btn-block mb-4"
                      :value="LogInStore.loading ? 'Loading' : 'Send magic link'"
                      :disabled="LogInStore.loading"
                    >
                      Send magic link
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Jumbotron -->
      </section>
      <!-- Section: Design Block 2 -->
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import { mapStores } from "pinia";
import useLogInStore from "../stores/LogIn";

export default {
  name: "ToDoList",

  computed: {
    ...mapStores(useLogInStore),
  },

  mounted() {
    this.ListStore.CallData();
  },
};
</script>

<style scoped>

</style>