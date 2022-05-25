<template>
  <div class="row">
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
  beforeMount() { 
    blogService.getAll().then((blogs) => (this.Blogs = blogs))
  },
};
</script>