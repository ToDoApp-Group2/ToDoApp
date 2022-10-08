<template>
     <div
      class="bg-dark bg-gradient text-center shadow-1-strong rounded text-white"
    >
      <div class="d-flex col-md-6 mx-auto mt-5"></div>

      <!-- Section: Design Block 1 -->
      <section class="text-center text-lg-start p-5 mt-5">
        <!-- Jumbotron -->
        <div class="container py-4 mt-5">
          <div class="row g-0 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div
                class="card cascading-right"
                style="
                  background: hsla(0, 0%, 100%, 0.55);
                  backdrop-filter: blur(30px);
                "
              >
                <div class="card-body p-5 shadow-5 text-center">
                  <h2 class="fw-bold mb-4"> Profile </h2>
                  <p class="mb-5 fw-bold text-warning">"Good Tasks Only"</p>

                  <form class="form-widget" @submit.prevent="updateProfile">
                    <!-- First and last names: 2 column grid layout with text inputs -->
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form1Example1"
                            class="form-control"
                            v-model="username"
                          />
                          <label class="form-label" for="form1Example1"
                            >First name</label
                          >
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form1Example2"
                            class="form-control"
                            v-model="website"
                          />
                          <label class="form-label" for="form1Example2"
                            >Last name</label
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                        <input type="email" placeholder="name@example.com" class="form-control" id="email" :value="store.user.email" disabled />
                      <label class="form-label" for="form1Example3"
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
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div
              class="
                bg-img bg-image
                w-50
                rounded-4
                shadow-4
                col-lg-6
                mb-5 mb-lg-0
                d-flex
                align-items-center
                justify-content-center
              "
              style="
                background-image: url('https://images.pexels.com/photos/7582013/pexels-photo-7582013.jpeg');
                height: 100vh;
                width: 100vh;
                background-size: auto 100%;
                background-repeat: no-repeat;
              "
            >
              <div class="bd-highlight">
                <img
                  src="/src/assets/logocheckme.png"
                  alt="CheckMe logo"
                  class="w-25 h-25"
                />
                <h1 class="fw-bold bd-highlight text-black text-center m-3">
                  Bringing a true feeling<br />
                  to your every day tasks.
                </h1>
                <p class="text-left fw-bold text-left text-center m-5">
                  Check.Me organize your tasks <br />
                  in one easy to use app.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Jumbotron -->
      </section>
     </div>
  </template>
  
  <script>
    import { supabase } from '../supabase/index'
    import { store } from '../stores/store'
    import { onMounted, ref } from 'vue'
  
    export default {
      setup() {
        const loading = ref(true)
        const username = ref('')
        const website = ref('')
        const avatar_url = ref('')
  
        async function getProfile() {
          try {
            loading.value = true
            store.user = supabase.auth.user()
  
            let { data, error, status } = await supabase
              .from('profiles')
              .select(`username, website, avatar_url`)
              .eq('id', store.user.id)
              .single()
  
            if (error && status !== 406) throw error
  
            if (data) {
              username.value = data.username
              website.value = data.website
              avatar_url.value = data.avatar_url
            }
          } catch (error) {
            alert(error.message)
          } finally {
            loading.value = false
          }
        }
  
        async function updateProfile() {
          try {
            loading.value = true
            store.user = supabase.auth.user()
  
            const updates = {
              id: store.user.id,
              username: username.value,
              website: website.value,
              avatar_url: avatar_url.value,
              updated_at: new Date(),
            }
  
            let { error } = await supabase.from('profiles').upsert(updates, {
              returning: 'minimal', // Don't return the value after inserting
            })
  
            if (error) throw error
          } catch (error) {
            alert(error.message)
          } finally {
            loading.value = false
          }
        }
  
        async function signOut() {
          try {
            loading.value = true
            let { error } = await supabase.auth.signOut()
            if (error) throw error
          } catch (error) {
            alert(error.message)
          } finally {
            loading.value = false
          }
        }
  
        onMounted(() => {
          getProfile()
        })
  
        return {
          store,
          loading,
          username,
          website,
          avatar_url,
          
  
          updateProfile,
          signOut,
        }
      },
    }
  </script>