<template>
  <div class="row">
    <h3>Opret nyt event</h3>
    <hr />
    <div class="container">
      <label for="title">Titel</label>
      <input
        v-model="Evnt.Title"
        type="text"
        id="title"
        name="tite"
        placeholder="Events titel.."
      />

      <label for="description">Beskrivelse</label>
      <textarea
        v-model="Evnt.Description"
        id="description"
        name="description"
        placeholder="En beskrivelse af eventet.."
        style="height: 200px"
      ></textarea>

      <label for="place">Lokation</label>
      <input
        v-model="Evnt.Place"
        type="text"
        id="place"
        name="place"
        placeholder="Events lokation.."
      />
      <div class="container">
        <div class="row" style="width:auto;">
          <div class="col-xs-6" style="width:auto;">
            <label for="startDateTime">Starttid</label><br />
            <input
              v-model="Evnt.StartDateTime"
              type="datetime-local"
              id="startDateTime"
              name="startDateTime"
              min="2022-05-20T00:00"
              max="2022-07-28T00:00"
            />
          </div>
          <div class="col-xs-6" style="width:auto;">
            <label for="endDateTime">Sluttid</label><br />
            <input
              v-model="Evnt.EndDateTime"
              type="datetime-local"
              id="endDateTime"
              name="endDateTime"
              min="2022-05-20T00:00"
              max="2022-07-28T00:00"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-success" v-on:click="CreateEvent">Opret</button>
    </div>
  </div>
</template>

<script>
import { eventService } from "../ServicesHelp//event.service";

export default {
  data() {
    return {
      Evnt: {
        Id: 0,
        Title: "",
        Description: "",
        Place: "",
        CreatedDateTime: "",
        StartDateTime: "2022-05-20T17:00",
        EndDateTime: "2022-05-20T18:00",
      },
    };
  },
  methods: {
    async CreateEvent() {
      this.Evnt.CreatedDateTime = this.getNow();
      eventService
        .create(this.Evnt)
        .then((response) => (
          response ? alert("Event oprettet succesfuldt") : ""));
       
       setTimeout(() => {  this.$router.push({path: "/Events"}); }, 1000);
       
    },
    getNow() {
      const today = new Date();
      var breaker = "-";
      var timebreaker = "";
      if((today.getMonth() + 1) < 10)
        breaker = "-0";
      const date =
        today.getFullYear() +
        breaker +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      if(today.getMinutes() < 10)
            timebreaker = "0";
      const time =
        today.getHours() + ":" + timebreaker + today.getMinutes();
      const dateTime = date + "T" + time;
      return dateTime;
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