
Vue.component('card-template',{
  props:['card'],
  template: '<p>{{card.Title}}</p>'
})

var app = new Vue({
  el:'#app',
  data:{
    item:'',
    results:[],
    searching:false,
    noresult:false,

  },
  methods:{
    search:function(){

      this.searching=true;
      fetch('http://www.omdbapi.com/?s='+encodeURIComponent(this.item) +'&apikey=e8ed16e8')
      .then(response => response.json())
      .then((data)=>{
        console.log(data);
        this.results = data;
        this.searching = false;
        document.querySelector("input").style.width="500px";
        document.querySelector("input").style.height="40px";
      })
    },
    spread:function(){
      document.querySelector("input").style.width="700px";
      document.querySelector("input").style.height="50px";
      document.querySelector("input").style.transition="0.6s ease-in-out";
    }
  }
})


// http://www.omdbapi.com/?s='+encodeURIComponent(this.item)+'&apikey=e8ed16e8'
// http://www.omdbapi.com/?t=${encodeURIComponent(this.term)}&apikey=e8ed16e8
// http://img.omdbapi.com/t=blade&apikey=e8ed16e8

