<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
            <div class="container">
                <a class="navbar-brand" href="http://localhost:8080/">
                    <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                    {{ Title }}
                </a>
                <div class="collapse navbar-collapse text-right" id="navbarText">
                    <router-link to="/home" class="btn btn-dark">Malaysia</router-link> |
                    <router-link to="/about" class="btn btn-dark">Japan</router-link> |
                    <router-link to="/China" class="btn btn-dark">China</router-link>
                </div>
            </div>
        </nav>
</template>

<script>


var apiList = [];


    export default {
      components: {
    },
      data: () => ({
        Title: 'FAEZ_NEWS',
      }),
      mounted() {
      },
      methods: { 
      },
    } //https://newsdata.io/api/1/news?apikey=pub_11392ce76280bbad7cf01239c251cebce5bf2&country=gb&language=en
</script> 