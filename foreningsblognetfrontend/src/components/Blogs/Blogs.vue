<template>
  <div class="row">
    <a v-if="$store.state.users.isLoggedIn" class="link-success my-5" href="/Blogs/create">Create new Blog</a>
    <a v-if="error">Noget gik galt</a>
    <div class="col-sm-6">
      <div 
        v-for="blog in Blogs"
        :key="blog.id"
        class="card"
        style="width: 18rem"
      >
        <div  class="card-body">
          <h5 class="card-title">{{ blog.title }}</h5>
          <p class="card-text">{{ blog.description }}</p>  
           <button v-on:click="Delete(blog.id)" class="btn btn-danger">
            Slet
           </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { blogService} from "../ServicesHelp//blog.service";

export default {
  data() {
    return {
      Blogs: [],
    };
  },
  methods: {
    async Delete(blogId){
       blogService
        .Delete(blogId)
        .then((response) => (this.CreateResponse  = response.data));
       setTimeout(() => {  blogService.getAll().then((blogs) => (this.Blogs = blogs)) }, 1000);
    },
  },
  beforeMount() { 
    blogService.getAll().then((blogs) => (this.Blogs = blogs))
  },
};
</script>