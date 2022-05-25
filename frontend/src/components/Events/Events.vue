<template>
  <div class="row pb-5">
    <a v-if="$store.state.users.isAdmin" class="link-success my-5" href="/events/create">Create new event</a>
    <div class="card col-sm-6"
      v-for="event in Events"
      :key="event.id"
      style="width: 45%; margin-bottom: 20px; margin-right: 10px;"
    >
      <div>
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-text">{{ event.description }}</p>
          <button v-on:click="Attend(event.id)" class="btn btn-success">
            Tilmeld dig!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventService } from "../ServicesHelp//event.service";

export default {
  data() {
    return {
      Events: [],
    };
  },
  methods: {
    async Attend(eventId) {
      const user = JSON.parse(localStorage.getItem("user"));
      eventService
        .attend(eventId, user.id)
        .then((response) => (this.CreateResponse = response.data));
    },
  },
  beforeMount() {
    eventService.getAll().then((events) => (this.Events = events));
  },
};
</script>