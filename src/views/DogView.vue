<template>
  <div>
    <div>
      <h2 class="text-center mb-5">
        Pregled podataka o psu i mjesto gdje se mogu uređivati podatci
      </h2>
      <h1>My Pedigree</h1>
      <PedigreeTable />
    </div>

    <div>
      <h1>Dog Details</h1>
      <p>Ime psa: {{ dogs.dogName }}</p>
      <p>Ime uzgajivačnice: {{ dogs.dogKennel }}</p>
      
      <p>Spol: {{ dogs.dogSex }}</p>
      <p>Datum rođenja: {{ dogs.dogBirth }}</p>
      <p>Broj osvojenih CACIB-a: {{ dogs.dogCacib }}</p>
      <p>Broj osvojenih CAC-a: {{ dogs.dogCac }}</p>
      <!-- Add more details here -->
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

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>