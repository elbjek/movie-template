
Vue.component('card-template',{
  props:['card'],
  template: '<div class="single-card"><img v-bind:src="card.Poster" alt="Missing a image"><p>Title:{{card.Title}}</p> <p>Year:{{card.Year}}</p></div>'
})

var app = new Vue({
  el:'#app',
  data:{
    item:'',
    results: [],
    noresult:false
  },
  methods:{
    
    search:function(){ 
   
      var URL = 'http://www.omdbapi.com/?s='+encodeURIComponent(this.item)+'&apikey=e8ed16e8';  
      var request = new XMLHttpRequest();
      request.open('GET', URL);
      request.onload = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
          
          if(this.status === 200){
            app.results = JSON.parse(this.response);
            app.results = app.results.Search;
            document.getElementById("cards").style.display="flex";     
          } 
          if(this.item = ''){
            noresult = true;
          }
        }
      }
      request.send();
      document.querySelector("input").style.width="500px";
      document.querySelector("input").style.height="40px";
      
      
    },
    spread:function(){
      document.querySelector("input").style.width="700px";
      document.querySelector("input").style.height="50px";
      document.querySelector("input").style.transition="0.6s ease-in-out";
    },
    slide:function(){
      
    }
    
  }
  
  
})

