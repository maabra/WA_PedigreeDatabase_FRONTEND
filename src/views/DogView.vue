<template>
  <div>
    <div>
      <h2 class="text-center mb-5">Pregled i uređivanje podataka o psu</h2>
      <h3 class="text-center mb-2">Pedigree</h3>
      <PedigreeTable :dogs="dogs"> </PedigreeTable>
    </div>

    <div>
      <h3 class="text-center mb-2">Detalji</h3>

      <center>
        <table class="m-2" text-align: left>
          <tr>
            <p><b>Ime psa:</b> {{ dogs.dogName }}</p>
          </tr>
          <tr>
            <p><b>Ime uzgajivačnice:</b> {{ 
              kennels.nameKennel }}</p>
          </tr>
          <tr>
            <p><b>Spol:</b> {{ dogs.dogSex }}</p>
          </tr>
          <tr>
            <p><b>Broj rodovnice:</b> {{ dogs.dogPedNr }}</p>
          </tr>
          <tr>
            <p><b>Datum rođenja:</b> {{ dogs.dogBirth }}</p>
          </tr>
          <tr>
            <p><b>Broj osvojenih CACIB-a:</b> {{ dogs.dogCacib }}</p>
          </tr>
          <tr>
            <p><b>Broj osvojenih CAC-a:</b> {{ dogs.dogCac }}</p>
          </tr>
        </table>
      </center>
    </div>

    <a class="btn btn-primary m-1" @click="deleteDog(dogs._id)">Izbriši psa</a>
    <a class="btn btn-primary m-1" @click="updateDog(dogs._id)">Uredi psa</a>
  </div>
</template>
  
  
  <script>
import PedigreeTable from "../components/PedigreeTable.vue";

import { dogFetch, dogDelete, kennelFetch } from "@/services";

export default {
  name: "DogView",

  components: {
    PedigreeTable,
  },
  data() {
    return {
      dogs: [],
      kennels: [],
    };
  },

  created() {
    this.pas_id = localStorage.getItem("dogId");
    
    this.uzg_id = localStorage.getItem("kennelId");
    
    console.log("ovo je pas" + this.pas_id);
    console.log("ovo je uzg" + this.uzg_id);
    this.dogFetch(this.pas_id);
    this.kennelFetch(this.uzg_id);
  },
  methods: {
    /*async fetchDogsAll() {
      const response = await service.get("/api/getAll");
      this.dogs2 = response.data;
      console.log(this.dogs2);*/

    async dogFetch(pas_id) {
      try {
        let response = await dogFetch.fetchDog(pas_id);
        this.dogs = response.data;

        console.log(this.dogs);
      } catch (error) {
        console.log(error);
      }
    },

    async kennelFetch(uzg_id) {
      try {
        let response = await kennelFetch.fetchKennel(uzg_id);
        this.kennels = response.data;

        console.log(this.kennels);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteDog(_id) {
      try {
        let response = await dogDelete.deleteDog(_id);
        this.odgovor = response.data;
        alert(this.odgovor);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    },

    async updateDog(_id) {
      localStorage.setItem("dogId", _id);

      this.$router.push({ name: "updateDog", params: { _id } });
    },
  },

  /*async fetchDogs() {
      console.log(this._id);
      let dogs = await service.get("/api/getOne/:id", this._id)
      .then(response => {
        this.dogs = response.data;
        
      console.log(this._id);
      });
        return dogs;
    },*/
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