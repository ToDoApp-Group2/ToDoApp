<template>
  <nav>
      <div class="test" @click="toggleNav">
          <img src="/src/assets/logocheckme.png">
          <span>CheckMe</span> 
      </div>
      <div class="ul-c">
          <ul ref="nav">
              <li class="links"
              v-for="(link, index) in navLinks"
              :key="index"
              >
              <router-link
              :to="link.path"
              >
                  {{ link.text }}
              </router-link>
              </li>
          </ul>
      </div>
  </nav>    
</template>


<script>
export default {
  props: ['navLinks'],
  methods: {
      toggleNav(){
          const nav=this.$refs.nav.classList;
          nav.contains('active') ? nav.remove('active') : nav.add('active');
      }
  },
};
</script>


<style lang="scss" scoped>
nav {
  display: flex;
  background: whitesmoke;
  height: 5rem;
  box-shadow: 2px 2px 2px #CCC;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  nav, div {
      &.test {
              display: flex;
              cursor: pointer;
              justify-content: flex-start;
              margin-left: 3rem;
              align-content: center;
      
              img{
                  height: 3.8rem;
              }
              span {
                  display: flex;
                  font-weight: 700;
                  align-items: center;
                  font-size: 1.5rem;
              }
          }
  }
  nav, div {
  &.ul-c {
      display: flex;
      margin-right: 3rem;
      justify-content: space-between;
      ul{
          display: flex;
          height: 100%;
          align-items: center;
          margin: 0;
          padding: 0;
          gap: 1rem;
          /*margin-right: 2rem;*/
          flex-wrap: wrap;
          justify-content: space-between;
          
          li{
              display: flex;
              list-style: none;
              justify-content: space-between;
          }
          a{
              text-decoration: none;
              display: flex;
              flex-direction: row-reverse;
              color: black;
              font-weight: 700;
              
          }
          a:hover{
              color: orangered;
          }
      }
  }
  }
}
@media screen and (max-width: 750px) {
  nav {
      nav, div {
          &.ul-c {
              ul {
                  display: flex;
                  position: absolute;
                  width: 8rem;
                  height: 25%;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  left: -240px;
                  transition: .5s ease all;
                  top:5rem;
                  
              
                  &.active {
                      background-color: black;
                      top: 5rem;
                      left: 0rem;
                      right: 0rem;
                      margin-right: 0;
                      z-index: 1;
                      
                  }
                  &.img-log {
                      position: fixed;
                      z-index: 99;
                      top: 0px;
                      left: 45px;
                  }
                  li {
                      display: flex;
                      width: 100%;
                      flex: 0.5;
                      justify-content: center;
                  }
                  li:hover{
                      background-color: orangered;
                      height: auto;
                  }
                  a {
                      justify-content: center;                        
                      color: white;
                      align-items: center;
                      
                  }
                  a:hover{
                      color: black;
                  }
              }
          }
      }
  }
}
</style>