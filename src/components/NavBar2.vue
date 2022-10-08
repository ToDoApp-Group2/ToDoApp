<template>
  <header id="header">
    <nav class="navbar">
      <img
        src="./images/logos/circle.svg"
        alt="Circle Logo"
        onclick="location.reload()"
      />
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#" class="nav-link a-animation" onclick="location.reload()"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link a-animation">Projects</a>
        </li>
        <li class="nav-item">
          <a href="#services" class="nav-link a-animation">Services</a>
        </li>
        <li class="nav-item">
          <button class="hide" type="button" onclick="contact()">
            Contact us
          </button>
        </li>
      </ul>
      <button
        class="btn-get-in-touch nav-menu"
        type="button"
        onclick="contact()"
      >
        Contact us
      </button>
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
  setup() {
    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".nav-menu");
    const header = document.querySelector("header");
    let margin = true;

    hamburguer.addEventListener("click", () => {
      if (margin) {
        header.style.marginBottom = "12rem";
        margin = false;
      } else {
        header.style.marginBottom = "2rem";
        margin = true;
      }
      hamburguer.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");
        header.style.marginBottom = "2rem";
        margin = true;
      })
    );

    document.querySelectorAll(".hamburger").forEach((n) =>
      n.addEventListener("click", () => {
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  },
};
</script>

<style>
    header{
  margin: 0 17rem;
  padding-top: 8.5rem;
}

li{
  list-style: none;
}

a{
  color: var(--title);
  text-decoration: none;
}

::-webkit-scrollbar{
  background-color: var(--background);
  width: 1.2rem;
}

::-webkit-scrollbar-thumb{
  background-color: var(--text);
  border-radius: 0.5rem;
}

.navbar{
  font-size: 17px;
  background-color: var(--background);
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* padding: 0 24px; */
  margin-bottom: 5rem;
}

.nav-menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.navbar img {
  padding-left: 0;
  padding-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 6rem;
}

.nav-link{
  transition: 0.7s ease;
}

.navlink:hover{
  color: var(--hover);
}

.navbar button{
  background-color: var(--btn);
  border: none;
  color: white;
  padding: 1.5rem 3.3rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.7rem;
}

.hamburguer{
  display: none;
  cursor: pointer;
}

.bar{
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--btn);
}

.hide {
  display: none;
}

@media(max-width:767px){
  header {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      padding-top: 8.5rem;
  }

  .navbar{
      align-items: center;
      width: 100%;
      justify-content: center;

  }

  .navbar img {
      padding-left: 0;
      padding-right: 10rem;
      display: flex;
      flex-wrap: wrap;
      width: 6rem;
  }

  .hamburguer{
      display: block;
  }

  .hamburguer.active .bar:nth-child(2){
      opacity: 0;
  }

  .hamburguer.active .bar:nth-child(1){
      transform: translateY(8px) rotate(45deg);
  }

  .hamburguer.active .bar:nth-child(3){
      transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu{
      position: absolute;
      left: -100%;
      top: 70px;
      gap: 0;
      flex-direction: column;
      background-color: var(--background);
      width: 100%;
      text-align: center;
      transition: 0.3s;
  }

  .nav-item{
      margin: 16px 0;
      list-style: none;
      text-decoration: none;
  }

  .nav-menu.active{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      left: 0;
  }

  .hide {
      display: flex;
  }
}
</style>