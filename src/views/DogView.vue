<template>
  <div>
    <div>
      <h2 class="text-center mb-3">
        Pregled podataka o psu i uređivanje istih
      </h2>
      <h3 class="text-center mb-3">Pedigree psa</h3>
      <PedigreeTable :dogs="dogs">
      </PedigreeTable>
    </div>

    <div>
      <h3 class="text-center mb-2">Detalji psa</h3>
      
    <center>
      <table class="m-2" text-align: left>
        <tr>
          <p><b>Ime psa:</b> {{ dogs.dogName }}</p>
        </tr>
        <tr>
          <p><b>Ime uzgajivačnice:</b> {{ dogs.dogKennel }}</p>
      </tr>
      <tr><p><b>Spol:</b> {{ dogs.dogSex }}</p>
    </tr>
    <tr><p><b>Broj rodovnice:</b> {{ dogs.dogPedNr }}</p>
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
    
    <a class="btn btn-primary" @click="deleteDog(dogs._id)"
    >Izbriši psa</a
  >
  </div>
</template>
  
  
  <script>
import PedigreeTable from "../components/PedigreeTable.vue";

import { service } from "@/services";

export default {
  name: "DogView",
  
  components: {
    PedigreeTable,
    
  },
  data() {
    return {
      dogs: [],
    };
    
  },

  created() {
    this._id = localStorage.getItem("dogId");
    console.log("ovo je " + this._id);
    this.fetchDog(this._id);
  },
  methods: {
    /*async fetchDogsAll() {
      const response = await service.get("/api/getAll");
      this.dogs2 = response.data;
      console.log(this.dogs2);*/
    
    async fetchDog(_id) {
      const response = await service.get("/api/getOne/" + _id);
      this.dogs = response.data;
      console.log(this.dogs);
      
    
},
async deleteDog(_id) {
      const response = await service.delete("/api/delete/" + _id);
      this.odgovor = response.data;
      console.log(this.odgovor);
      this.$router.push({ name: "home"});
      
},},

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