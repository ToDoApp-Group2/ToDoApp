<template>
        <div class="bg-dark bg-gradient text-center shadow-1-strong rounded text-white">
      <div class="d-flex col-md-6 mx-auto mt-5"></div>
            <!-- Section: Design Block 2 -->
            <section class="text-center text-lg-start p-5">
        <!-- Jumbotron -->
        <div class="container py-4">
          <div class="row g-0 align-items-center">
            <div
              class="bg-image w-50 rounded-4 shadow-4 col-lg-6 mb-5 mb-lg-0 d-flex align-items-center justify-content-center"
              style="
                background-image: url('https://img.freepik.com/foto-gratis/notas-post-it-gramatica-taza-cafe_23-2149436700.jpg?w=2000');
                height: 100vh;
                background-size: auto 100%;
                background-repeat: no-repeat;
              "
            >
              <div class="p-2 bd-highlight text-center">
                <h2>Create Account</h2>

                <button>Signup</button>
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

                  <form @submit.prevent="handleLogin">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example4"
                        class="form-control"
                        placeholder="name@example.com"
                        v-model="email"
                      />
                      <label class="form-label" for="form1Example4"
                        >Email address</label
                      >
                    </div>

                    <!-- Submit button -->
                    <button
                      type="submit"
                      class="btn btn-warning btn-block mb-4"
                      :value="loading ? 'Loading' : 'Send magic link'"
                      :disabled="loading"
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
      </div>

    <!--
    <form class="row flex-center flex" @submit.prevent="handleLogin">
      <div class="col-6 form-widgetgit">
        <h1 class="header">Supabase + Vue 3</h1>
        <p class="description">Sign in via magic link with your email below</p>
        <div>
          <input
            class="inputField"
            type="email"
            placeholder="Your email"
            v-model="email"
          />
        </div>
        <div>
          <input
            type="submit"
            class="button block"
            :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
          />
        </div>
      </div>
    </form>-->

  </template>
  
  <script>
    import { ref } from 'vue'
    import { supabase } from '../supabase'
  
    export default {
      setup() {
        const loading = ref(false)
        const email = ref('')
  
        const handleLogin = async () => {
          try {
            loading.value = true
            const { error } = await supabase.auth.signIn({ email: email.value })
            if (error) throw error
            alert('Check your email for the login link!')
          } catch (error) {
            alert(error.error_description || error.message)
          } finally {
            loading.value = false
          }
        }
  
        return {
          loading,
          email,
          handleLogin,
        }
      },
    }
  </script>
  
  <style>
body {
  min-height: 0;
}

div {
  padding: 0;
  margin: 0;
}

template {
  padding: 0;
  margin: 0;
}

.cascading-right {
  margin-right: -50px;
}

.cascading-left {
  margin-left: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>