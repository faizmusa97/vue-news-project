<template>
  <!-- <nav class="container text-center pt-4">
    <router-link to="/" class="btn btn-primary">Home</router-link> |
    <router-link to="/about" class="btn btn-primary">About</router-link>
  </nav> -->
  <Topbar></Topbar>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Footer from './components/Footer.vue'
  export default {
      components: {
          Topbar,
          Footer,
      },
    }
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
