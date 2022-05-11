<template>
  <div class="col-md-12">
    

    <button type="button" class="Hello" v-on:click="GetUsers">
      ListofUsers
    </button>
    <div id="app">
      {{ Users }}
    </div>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            Users:[]
        }
    },
  methods: {
    async GetUsers() {
      axios
        .get("https://localhost:49165/api/users")
        .then((response) => (this.Users = response.data));
    },

  },
};
</script>