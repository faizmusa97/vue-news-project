<template>
    <div class="homemy container py-4">
      <h3 class="text-primary">{{ heading }}</h3>
      <div class="row pt4">
        <p>
          <button class="btn text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            About
          </button>
          <button class="btn text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
            Programmer Detail
          </button>
          <button class="btn text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
            Reference
          </button>
        </p>
        <div class="collapse pt-2" id="collapseExample">
          <div class="card card-body bg-dark text-white text-center" >
            <h5 class="text-primary">Abount This Project</h5>
            <p>{{ homeAbout.a }} <br> {{ homeAbout.b }} <br> {{ homeAbout.c }}</p>
          </div>
        </div>
        <div class="collapse pt-2" id="collapseExample1">
          <div class="card card-body bg-dark text-white text-center">
            <h5 class="text-primary">Abount Me</h5>
            <p>{{ aboutMe.a }} <br> {{ aboutMe.b }} <br> {{ aboutMe.c }}</p>
          </div>
        </div>
        <div class="collapse pt-2" id="collapseExample2" v-for="(item, index) in referenceList">
          <div class="card card-body bg-dark text-white pt-2" >
            <h5 class="text-primary">{{ item.name }}</h5>
            <p>{{ item.Description }} <br> <a :href=" item.links ">{{ item.links }}</a></p>
          </div>
        </div>
      </div>
      <div class="row pt-2" >
        <h3 class="text-primary">Api</h3>
        <div class="col-3" v-for="(item, index) in apiList">
          <div class="card shadow  bg-dark" href="item.links">
            <div class="card-body">
              <h4 class="text-primary">{{ item.name }}</h4>
              <p class="text-white">{{ item.Description }}</p>
              <p>{{ item.content }}</p>  
              <a :href=" item.links " >View More</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from 'axios'
  var homeAbout = {
      a: 'Basically this project just to understand how to create website project with Vue.js CLI.',
      b: 'I create this project to better understand the Javascript programming with the API request.',
      c: 'I want to help everybody, no metter who they are as long as they want to study this.',
  } 

  var aboutMe = {
      a: 'Iam Faez, from Malaysia. Software Engineering student from UMT. Curruntly Internship with Solutionx Software a software development company',
      b: 'I love programming. Since i was 13, I have kept the ambition to study in this field.',
      c: 'I just want to be the best among the best. I know I am not. But I have to ty too',
  } 

  export default {
    name: 'homemy',
    components: {
    },
    data: () => ({
      heading: 'Homes',
      apiList:[],
      referenceList: [],
      homeAbout,
      aboutMe,
    }),
    mounted(){
      axios
                  .get('https://mocki.io/v1/d5589148-5ed4-4f04-b031-566b329f2cc4')
                  .then(response => {
                      //this.$store.commit('setToken', token)
                      console.log(response)
                      this.apiList = response.data
                      //const token = response.data.auth_token
                      //axios.defaults.headers.common['Authorization'] = "Token" + token
                      //localStorage.setItem("token", token)
  
                  })
                  .catch(error => {
                      if(error.response0){
                          for(const property in error.response.data){
                              this.error.pust('${property}: ${error.response.data[property]}')
                          }
                      }else{
                          console.log(error)
                      }      
                  })

      axios
                  .get('https://mocki.io/v1/c25b6a0b-3214-41a4-b9b7-e3b8b870dfe5')
                  .then(response => {
                      //this.$store.commit('setToken', token)
                      console.log(response)
                      this.referenceList = response.data
                      //const token = response.data.auth_token
                      //axios.defaults.headers.common['Authorization'] = "Token" + token
                      //localStorage.setItem("token", token)
  
                  })
                  .catch(error => {
                      if(error.response0){
                          for(const property in error.response.data){
                              this.error.pust('${property}: ${error.response.data[property]}')
                          }
                      }else{
                          console.log(error)
                      }      
                  })
           
    },
    method: {
    }
  }
  </script>
  
  <!-- Refecence [ 
  {
    "name": "Bootstrap",
    "Description": "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
    "links": "https://getbootstrap.com/docs/5.0/components/collapse/"
  },
  {
    "name": "Vue JS",
    "Description": "The Progressive JavaScript Framework An approachable, performant and versatile framework for building web user interfaces.",
    "links": "https://vuejs.org/"
  },
  {
    "name": "Axios",
    "Description": "Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.",
    "links": "https://axios-http.com/"
  }
] -->

<!-- API list [
  {
    "name": "NewsData.io",
    "Description": "Api for news",
    "links": "https://newsdata.io/"
  },
  {
    "name": "mocki.io",
    "Description": "This website provite service for client to create they own link to insert dummy data for api response.",
    "links": "https://mocki.io/fake-json-api"
  },
  {
    "name": "apilayer.com",
    "Description": "This website provite API for currency.",
    "links": "https://apilayer.com/"
  },
  {
    "name": "open-meteo.com",
    "Description": "This website provite API for weather forcast.",
    "links": "'https://open-meteo.com/"
  }
] -->