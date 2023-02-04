<template>

    <div>
      <h2 class="text-center mb-5">
        Pregled podataka o psu i mjesto gdje se mogu uređivati podatci
      </h2>
      <h1>My Pedigree</h1>
      <PedigreeTable />

  </div>
</template>
  
  
  <script>

import PedigreeTable from "../components/PedigreeTable.vue";

export default {
  name: "DogView",
  data() {
    return {
      User: {},
    };
  },
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