<template>
  <div>
    <div>
      <h2 class="text-center mb-5">Lista svih pasa</h2>
    </div>
    Sortiranje:
    <select v-model="sortby" class="text-right m-1">
      <option value="dogName">Ime</option>
      <option value="dogCacib">CACIB</option>
      <option value="dogCac">CAC</option></select
    ><select v-model="sort" class="text-right m-1">
      <option value="asc">Uzlazno</option>
      <option value="dec">Silazno</option>
    </select>
    <div
      class="text-center mb-2"
      v-for="dog in sortedDogs"
      :key="JSON.stringify(dog)"
    >
      <a class="btn btn-primary" @click="setDogId(dog._id, dog.dogKennel)"
        >{{ dog.dogName }} {{ dog.kennelName }} | CAC: {{ dog.dogCac }} CACIB:
        {{ dog.dogCacib }} ({{ dog.dogPedNr }})</a
      >
    </div>
  </div>
</template>

/* testno
<div v-if="dogs">
  {{ dogs }}Moze se vidjeti
</div>
*/

<script>
import { dogsAll, kennelsAll } from "@/services";

export default {
  name: "ListView",
  data() {
    return {
      sortby: "dogName",
      sort: "asc",
      dogs: [],
      kennels: [],
      /*testlist: [
        { id: 1, name: "Test1" },
        { id: 2, name: "Test2" },
        { id: 3, name: "Test3" }
      ],*/
    };
  },

  created() {
    this.allKennels();
    this.allDogs();
    //this.fetchDogs();
  },
  methods: {
    async allDogs() {
      try {
        let response = await dogsAll.allDogs();
        this.dogs = response.data;

        console.log(this.dogs);
      } catch (error) {
        console.log(error);
      }
    },
    async allKennels() {
      try {
        let response = await kennelsAll.allKennels();
        this.kennels = response.data;

        console.log(this.kennels);
      } catch (error) {
        console.log(error);
      }
    },
    /*async fetchDogs() {
      const response = await service.get("/api/getAll");
      this.dogs = response.data;

      console.log(this.dogs);
    },*/

    setDogId(_id, dogKennel) {
      localStorage.setItem("dogId", _id);

      localStorage.setItem("kennelId", dogKennel);

      this.$router.push({ name: "dog", params: { _id } });
    },

  },
  computed: {
    sortedDogs() {
      return this.dogs.map(dog => {
      const kennel = this.kennels.find(kennel => kennel._id === dog.dogKennel);
      return {
        ...dog,
        kennelName: kennel ? kennel.nameKennel : ''
      }
    })
        .slice(0)
        .sort((a, b) =>
          this.sort == "asc"
            ? a[this.sortby].localeCompare(b[this.sortby])
            : b[this.sortby].localeCompare(a[this.sortby])
        );
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
select {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 3px;
}
</style>