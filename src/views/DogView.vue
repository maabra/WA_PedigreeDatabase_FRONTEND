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
    <p>Name: {{ dog.dogName }}</p>
    <p>Kennel: {{ dog.dogKennel }}</p>
    <!-- Add more details here -->
  </div>

  </div>
</template>
  
  
  <script>

import PedigreeTable from "../components/PedigreeTable.vue";


export default {
  name: "DogView",  
  props: ['dogs'],
  data() {
    return {
      dog: {}
    }
  },
  
  created() {
    console.log(this.dogs);
    this.dog = this.getDogById(this.$route.params.id);
  },
  methods: {
    getDogById(id) {
      // Get the dog information from the array using the id
      return this.dogs.find(dog => dog._id === id);
    },},
    
  components: {
    PedigreeTable,
  },
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