<template>
  <div v-if="store.authenticated">
    <button @click="newImage()" type="Novi post" class="btn btn-primary ml-2">Post new image</button>
    <div @click="gotoDetails(card)" :key="card.id" v-for="card in cards">
      <InstagramCard :info="card"/>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store.js";

export default {
  data() {
    return {
      store,
      cards: []
      }
  },
  watch: {
    "store.searchTerm": _.debounce(function (val) {
      this.fetchPosts(val)
      },500)
  },
  name: "posts",
  methods: {
    gotoDetails(card) {
      this.$router.push({path: `post/${card.id}`})
    },
    newImage() {
      this.$router.push({name: 'newpost'}).catch(err => console.log(err))
    },
    fetchPosts(term){
      fetch(`http://localhost:3000/posts?term=${term}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.cards = data.map(doc => {
          return {            
            id: doc.id,             
            url: doc.source,             
            email: doc.createdBy,             
            title: doc.title,             
            posted_at: Number(doc.postedAt)          
          } 
        })
      });
    }
  },
  components: {
    InstagramCard
  },
  mounted(){
    this.fetchPosts("","");
  }
}
</script>

<style scoped>
  button {
    margin-bottom: 20px
  }
</style>