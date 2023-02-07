<template>
  <div>
    <div>
      <h2 class="text-center mb-5">
        Lista svih pasa
      </h2>
    </div>
    <ul>
      <li v-for="dog in dogs" :key="dog._id">
        <a class="btn btn-primary" @click="setDogId(dog._id)">{{ dog.dogName }}
          {{ dog.dogKennel }}
          ({{ dog.dogPedNr }})</a
        >
      </li>
    </ul>
  </div>
</template>

/* testno
<div v-if="dogs">
  {{ dogs }}Moze se vidjeti
</div>
*/

<script>
export default {

}
</script>

<style>

</style>
<script>
import { service } from "@/services";

export default {
  name: "ListView",
  data() {
    return {
      dogs: [],
      /*testlist: [
        { id: 1, name: "Test1" },
        { id: 2, name: "Test2" },
        { id: 3, name: "Test3" }
      ],*/
    };
  },

  created() {
    this.fetchDogs();
  },
  methods: {
    async fetchDogs() {
      const response = await service.get("/api/getAll");
      this.dogs = response.data;
      
    console.log(this.dogs);
    },
 
    setDogId(_id) {
      localStorage.setItem("dogId", _id);

      this.$router.push({ name: "dog" , params: { _id } });
    },

  },
};
</script>