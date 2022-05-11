<template>
  <div class="row">
    <h3>Opret nyt event</h3>
    <hr />
    <div class="container">
      <label for="title">Titel</label>
      <input
        v-model="Event.title"
        type="text"
        id="title"
        name="tite"
        placeholder="Events titel.."
      />

      <label for="description">Beskrivelse</label>
      <textarea
        v-model="Event.description"
        id="description"
        name="description"
        placeholder="En beskrivelse af eventet.."
        style="height: 200px"
      ></textarea>

      <label for="place">Lokation</label>
      <input
        v-model="Event.place"
        type="text"
        id="place"
        name="place"
        placeholder="Events lokation.."
      />

      <button class="btn btn-success" v-on:click="CreateEvent">Opret</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Event: {
        title: "",
        description: "",
        place: "",
        createdDateTime: "",
        startDateTime: "",
        endDateTime: "",
      },
      CreateResponse: {},
    };
  },
  methods: {
    async CreateEvent() {
      axios
        .post("https://localhost:7282/api/events", this.Event)
        .then((response) => (this.CreateResponse = response.data));
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