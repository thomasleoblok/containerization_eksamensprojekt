<template>
  <div class="row">
    <a class="link-success my-5" href="/events/create">Create new event</a>
    <div class="col-sm-6">
      <div
        v-for="event in Events"
        :key="event.id"
        class="card"
        style="width: 18rem"
      >
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-text">{{ event.description }}</p>
          <a v-bind:href="'/events/' + event.id" class="btn btn-success"
            >Tilmeld dig!</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Events: [],
    };
  },
  methods: {
    async GetEvents() {
      axios
        .get("https://localhost:7282/api/events")
        .then((response) => (this.Events = response.data));
    },
  },
  beforeMount() {
    this.GetEvents();
  },
};
</script>