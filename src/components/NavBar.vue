<template>
<header>
  <nav class="navbar">
    <a href="#" class="nav-brand">CheckMe>></a>
    <ul class="nav-menu">
        <li class="nav-item">
            <a href="#" class="nav-link">About Us</a>
        </li>
         <li class="nav-item">
            <a href="#" class="nav-link">Register</a>
        </li>
         <li class="nav-item">
            <a href="#" class="nav-link">Log In</a>
        </li>
        <router-link to="/prueba">Prueba</router-link>
    </ul>
    <div class="hamburguer">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>

  </nav>
</header>
</template>


<script>
export default {
}
</script>


<style>
header{
    background-color:black;
    padding: 1.5rem;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
}

.nav-menu{
    color: white;
    font-size: 1.5rem;
    margin: 0 5rem 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
 
}
.nav-brand{
    
    font-size: 1.5rem;
    color: orangered;
    text-decoration: none;
    margin:0 auto 0 5rem;
}

.nav-item:hover{
    color: orangered;
}
</style>