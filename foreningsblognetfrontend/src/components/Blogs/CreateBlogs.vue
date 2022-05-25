<template>
  <div class="row">
    <h3>Opret ny blog</h3>
    <hr />
    <div class="container">
      <label for="title">Titel</label>
      <input
        v-model="Blog.Title"
        type="text"
        id="title"
        name="tite"
        placeholder="Blogs titel.."
      />

      <label for="description">Beskrivelse</label>
      <textarea
        v-model="Blog.Description"
        id="description"
        name="description"
        placeholder="Beskrivelse af blog..."
        style="height: 200px"
      ></textarea>

      <label for="place">Author</label>
      <input
        v-model="Blog.author"
        type="text"
        id="author"
        name="author"
        placeholder="Forfatteren..."
      />

      <button class="btn btn-success" v-on:click="CreateBlogs">Opret</button>
    </div>
  </div>
</template>

<script>
import { blogService} from "../ServicesHelp//blog.service";


export default {
  data() {
    return {
      Blog: {
        Title: "",
        Description: "",
        userid:0,
        author:""
      },
      
      CreateResponse: {},
    };
  },
  methods: {
    async CreateBlogs() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.Blog.userid=user.id
         blogService
        .create(this.Blog)
        .then((response) => (this.CreateResponse = response.data));
       
       setTimeout(() => {  this.$router.push({path: "/blogs"}); }, 1000);
    },
  },
  
};
</script>

<style scoped>
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 10em;
}
</style>