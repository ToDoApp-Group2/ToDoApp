<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <a class="navbar-brand me-1" href="#">
      <img
        src="/src/assets/logocheckme.png"
        height="40"
        alt="CheckMe logo"
        loading="lazy"
        style="margin-top: -1px;"
      />
    </a>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link bold-style1" href="#">CheckMe</a>
        </li>
      </ul>
      <!-- Left links -->

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2 logIn-style">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3 signUp-style">
          Sign up
        </button>
        
      </div>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>


<script>

export default{
}
</script>


<style scoped>

.bold-style1{
    font-weight: bold;
    font-size: 1.5rem;
  
}
.logIn-style{
    color: black;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
}
.signUp-style{
    background-color: black;
    border-color:black ;
    font-weight: bold;
}

button:hover{
    background-color: black;
    border-color:black ;
    font-weight: bold;
}
</style>