<template>
    <div class="home container py-4">
      <h3>{{ heading }}</h3>
      <div class="row">
        <div class="col-3">
          <div class="list-group pt-4" v-for="(item, index) in dataList">
            <a :href="item.link" class="list-group-item list-group-item-action border-dark">{{ item.title }}</a>
          </div>
        </div>
  
        <div class="col">
          <div class="row pt-4" v-for="(item, index) in dataList">
            <div class="col" >
              <div class="card shadow border-dark">
                <div class="card-header ">
                  <b><h4>{{ item.title }}</h4></b>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <img class="img-thumbnail" :src="item.image_url"  width="500" height="333"/>
                  </div>
                  <p>{{ item.description }}</p>
                  <p>{{ item.content }}</p>  
                </div>
                <div class="card-footer">
                  <b><small>Source: {{ item.source_id }} Publish Date : {{ item.pubDate }}</small></b> <a :href="item.link" >View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from 'axios'
  
  export default {
    name: 'HomeView',
    components: {
    },
    data: () => ({
      heading: 'China News',
      dataList:[],
    }),
    mounted(){  
      axios
                  .get('https://newsdata.io/api/1/news?apikey=pub_11392ce76280bbad7cf01239c251cebce5bf2&country=cn&language=en')
                  .then(response => {
                      //this.$store.commit('setToken', token)
                      console.log(response)
                      this.dataList = response.data.results
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
                  for(var i in this.dataList){
                    console.log(this.dataList[i])
                  }
    },
    method: {

    }
  }
  </script>
  