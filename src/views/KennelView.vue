<template>
  <div>
    <div>
      <h2 class="text-center mb-5">Pregled podataka o uzgajivačnici</h2>
    </div>

    <div>
      <h3 class="text-center mb-2">
        Detalji uzgajivačnice {{ kennels.nameKennel }}
      </h3>

      <center>
        <table class="m-2" text-align: left>
          <tr>
            <p><b>Ime uzgajivačnice:</b> {{ kennels.nameKennel }}</p>
          </tr>
          <tr>
            <p><b>Prvo leglo u uzgajivačnici:</b> {{ kennels.firstLitter }}</p>
          </tr>
          <tr>
            <p><b>Zadnje leglo u uzgajivačnici:</b> {{ kennels.lastLitter }}</p>
          </tr>
          <tr>
            <p><b>Ime vlasnika:</b> {{ kennels.ownerKennel }}</p>
          </tr>
          <tr>
            <p><b>Psi:</b></p>
          </tr>
        </table>
      </center>

      <div>
        <ul>
          <li v-for="dog in filterDogs" :key="JSON.stringify(dog)">{{ dog.dogName }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  
  <script>
import { dogsAll, kennelFetch } from "@/services";

export default {
  name: "DogView",

  data() {
    return {
      kennels: [],
      dogs: [],
      selectedDogs: [],
      dogsInKennel: [],
    };
  },

  created() {
    this._id = localStorage.getItem("kennelId");
    console.log("ovo je " + this._id);
    this.kennelFetch(this._id);
    this.selectedDogs = this.kennels.dogs;
    this.allDogs();
  },

  methods: {
    /*async fetchkennelsAll() {
      const response = await service.get("/api/getAll");
      this.kennels2 = response.data;
      console.log(this.kennels2);*/


    async kennelFetch(_id) {
      try {
        let response = await kennelFetch.fetchKennel(_id);
        this.kennels = response.data;

        console.log(this.kennels);
      } catch (error) {
        console.log(error);
      }
    },
    async allDogs() {
      try {
        let response = await dogsAll.allDogs();
        this.dogs = response.data;
        console.log(this.dogsInKennel);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    filterDogs() {
      return this.dogs.filter(dogs => this.kennels.dogs.includes(dogs._id));
    },
  },

};
</script>

<style lang="scss">
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
}
p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 5px;
}
</style>