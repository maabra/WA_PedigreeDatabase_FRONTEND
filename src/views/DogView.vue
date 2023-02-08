<template>
  <div>
    <div>
      <h2 class="text-center mb-3">
        Pregled podataka o psu i mjesto
        gdje se mogu uređivati podatci
      </h2>
      <h3 class="text-center mb-2">Pedigree psa</h3>
      <PedigreeTable />
    </div>

    <div>
      <h3 class="text-center mb-2">Detalji psa</h3>
      <p class="text-center">Ime psa: {{ dogs.dogName }}</p>
      <p class="text-center">Ime uzgajivačnice: {{ dogs.dogKennel }}</p>
      
      <p class="text-center">Spol: {{ dogs.dogSex }}</p>
      <p class="text-center">Datum rođenja: {{ dogs.dogBirth }}</p>
      <p class="text-center">Broj osvojenih CACIB-a: {{ dogs.dogCacib }}</p>
      <p class="text-center">Broj osvojenih CAC-a: {{ dogs.dogCac }}</p>
    </div>
  </div>
</template>
  
  
  <script>
import PedigreeTable from "../components/PedigreeTable.vue";

import { service } from "@/services";

export default {
  name: "DogView",
  data() {
    return {
      dogs: [],
    };
  },

  created() {
    this._id = localStorage.getItem("dogId");
    console.log("ovo je " + this._id);
    this.fetchDogs(this._id);
  },
  components: {
    PedigreeTable,
  },
  methods: {
    /*async fetchDogsAll() {
      const response = await service.get("/api/getAll");
      this.dogs2 = response.data;
      console.log(this.dogs2);*/
    
    async fetchDogs(_id) {
      const response = await service.get("/api/getOne/" + _id);
      this.dogs = response.data;
      console.log(this.dogs);
      
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

</style>