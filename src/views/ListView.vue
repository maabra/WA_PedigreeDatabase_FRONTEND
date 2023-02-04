<template>
  <div>
    <div class="row" v-repeat="dogs" track-by="_id">
  <h2 class="text-center mb-5">Lista svih pasa kategoriziranih po količini osvojenih nagrada </h2>
</div>
<div>
  <ul>
    <li v-for="dogs in dog" :key="dogs._id"></li>
  </ul>
</div>
</div>
  </template>
  
  <script>
  import {getAllDogs} from "@/services";

  export default {
    name: "ListView",
    components: {},
    data() {
    return {
      items: []
    };
  }, 
  methods: {
    async getAllDogs() {
      let response = await getAllDogs.getAll();
      this.dogs = response;
      console.log(this.dogs);
  },
},
  
  };
  </script>
