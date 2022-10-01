<template>
  <div>
    <!-- Background -->
    <div
      class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      style="
        background-image: url('https://images.pexels.com/photos/5861190/pexels-photo-5861190.jpeg?cs=srgb&dl=pexels-rahul-shah-5861190.jpg&fm=jpg');
      "
    >
      <h1 class="mb-3 h2">Check.Me logo?</h1>

      <p class="fw-bold mb-5">
        Put yourself <br />
        at the top of your <br />
        to do list
      </p>
      <!-- Section: Design Block 1 -->
      <section class="text-center text-lg-start">
        <!-- Jumbotron -->
        <div class="container py-4">
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
                  <h2 class="fw-bold mb-5">Sign up</h2>
                  <p class="mb-5"> "Good Plans Only"</p>

                  <form>
                    <!-- First and last names: 2 column grid layout with text inputs -->
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">

                          <input
                            type="text"
                            id="form1Example1"
                            class="form-control"
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
                          />
                          <label class="form-label" for="form1Example2"
                            >Last name</label
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">

                      <input
                        type="email"
                        id="form1Example3"
                        class="form-control"
                        placeholder="name@example.com"
                      />
                      <label class="form-label" for="form1Example3"
                        >Email address</label
                      >

                    </div>

                    <!-- Submit button -->
                    <button
                      type="submit"
                      class="btn btn-warning btn-block mb-4"
                    >
                      Sign up
                    </button>

                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://images.pexels.com/photos/7582013/pexels-photo-7582013.jpeg"
                class="w-100 rounded-4 shadow-4"
                alt="todolist_image"
              />
              <div class="p-2 bd-highlight">
        <h2>Welcome Back!</h2>
        <button>Login</button>
      </div>
            </div>
          </div>
        </div>
        <!-- Jumbotron -->
      </section>
      <!-- Section: Design Block 1 -->
      
      <!-- Section: Design Block 2 -->
      <section class="text-center text-lg-start">
        <!-- Jumbotron -->
        <div class="container py-4">
          <div class="row g-0 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://images.pexels.com/photos/7582013/pexels-photo-7582013.jpeg"
                class="w-100 rounded-4 shadow-4"
                alt="todolist_image"
              />
              <div class="p-2 bd-highlight">
        <h2>Create Account</h2>

        <button>Signup</button>
      </div>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div
                class="card cascading-right"
                style="
                  background: hsla(0, 0%, 100%, 0.55);
                  backdrop-filter: blur(30px);
                "
              >
                <div class="card-body p-5 shadow-5 text-center">
                  <h2 class="fw-bold mb-5">Log in</h2>
                  <p class="mb-5"> "DO <del>UBT</del>"</p>

                  <form>

                    <!-- Email input -->
                    <div class="form-outline mb-4">

                      <input
                        type="email"
                        id="form1Example3"
                        class="form-control"
                        placeholder="name@example.com"
                      />
                      <label class="form-label" for="form1Example3"
                        >Email address</label
                      >

                    </div>

                    <!-- Submit button -->
                    <button
                      type="submit"
                      class="btn btn-warning btn-block mb-4"
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
    </div>
    <!-- Background -->

    <div
      class="d-flex flex-row bd-highlight bg-image"
      style="background-image: url(https://images.pexels.com/photos/4300394/pexels-photo-4300394.jpeg?cs=srgb&dl=pexels-dominika-roseclay-4300394.jpg&fm=jpg); height: 100vh width: 100vh"
    >
      <div class="p-2 bd-highlight">
        <h2>Create Account</h2>

        <button>Signup</button>
      </div>

      <div class="p-2 bd-highlight">
        <h2>Welcome Back!</h2>
        <button>Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>